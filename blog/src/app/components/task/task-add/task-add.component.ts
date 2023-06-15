import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import {format, parse, toDate} from 'date-fns';
@Component({
  selector: 'add-post',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  public data = {
    title: '',
    imgURL: '',
    text: '',
    userId: this.dataService.currentUser.userId,
    date: format(new Date(), 'dd.MM.yyyy'),
  };
  constructor(public dataService: DataService, private router: Router) {}

  sendPost() {
    const parsedDate = parse(this.data.date, 'yyyy-MM-dd', new Date());
    this.data.date = format(parsedDate, 'dd.MM.yyyy');
    this.dataService.addPost(this.data).subscribe(
      (result) => {
        if (result === null || result === undefined) {
          console.log('Data error. Data is either null or undefined');
        } else {
          this.data.title = '';
          this.data.imgURL = '';
          this.data.text = '';
          this.router.navigate(['/blog']);
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
