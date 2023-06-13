import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() title?: string;
  @Input() image?: string;
  @Input() text?: string;
  @Input() id?: number;
  imageLoaded: boolean = false;

  ngOnChanges() {
    this.imageLoaded = false;
  }
  imageLoad() {
    this.imageLoaded = true;
  }

}
