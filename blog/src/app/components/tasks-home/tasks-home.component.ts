import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-home',
  templateUrl: './tasks-home.component.html',
  styleUrls: ['./tasks-home.component.scss'],
})
export class TasksHomeComponent implements OnInit {
  public filterText: string = '';

  constructor() {}

  ngOnInit(): void {}

  getName($event: string): void {
    this.filterText = $event;
  }
}
