import {Component} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {format, parse} from "date-fns";

@Component({
  selector: 'blog-edit',
  templateUrl: './task-edit.html',
  styleUrls: ['./task-edit.scss'],
})
export class TaskEdit {
  public data = {
    title: '',
    imgURL: '',
    text: '',
    id: '',
    userId: this.dataService.currentUser.userId,
    date: format(new Date(), 'dd.MM.yyyy'),
  };

  constructor(
    public dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.data.id = params['id'];
    });
    this.dataService.getById(this.data.id).subscribe((response: any) => {
      this.data.title = response.title;
      this.data.text = response.text;

      //format date to format that is recognized by html date input
      const parsedDate = parse(response.date, 'dd.MM.yyyy', new Date());
      this.data.date = format(parsedDate, 'yyyy-MM-dd');
    })
  }

  editPost() {
    //format date back to dd.mm.yyyy
    const parsedDate = parse(this.data.date, 'yyyy-MM-dd', new Date());
    this.data.date = format(parsedDate, 'dd.MM.yyyy');

    this.dataService.editPost(this.data, this.data.id).subscribe(
      (result) => {
        if (!result) {
          console.log('no new data');
        } else {
          this.data.title = '';
          this.data.imgURL = '';
          this.data.text = '';
          this.data.id = '';
          this.router.navigate(['/blog']);
        }
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
}
