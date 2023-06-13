import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-item-image',
  templateUrl: './task-item-image.component.html',
  styleUrls: ['./task-item-image.component.scss'],
})
export class TaskItemImageComponent {
  @Input() image?: string;
}
