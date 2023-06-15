import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {differenceInDays, parse} from 'date-fns';


@Component({
  selector: 'blog-item-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  public title: string = '';
  public text: string = '';
  public date: string = '';
  public daysLeft: number = 0;


  constructor(private service: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });

    this.service.getById(id).subscribe((res: any) => {
      this.title = res['title'];
      this.text = res['text'];
      this.date = res['date'];
      this.daysLeft = differenceInDays(
        parse(
          res['date'],
          'dd.MM.yyyy',
          new Date()
        ),
        new Date()
      );
    });
  }
}
