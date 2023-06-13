import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss'],
})
export class TaskTitleComponent {
  @Input() title?: string;
}
