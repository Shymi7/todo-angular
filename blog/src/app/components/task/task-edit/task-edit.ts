import { Component, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  };
  constructor(
    public dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.data.id = params['id'];
      console.log(this.data.id);
    });
  }
  editPost() {
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
