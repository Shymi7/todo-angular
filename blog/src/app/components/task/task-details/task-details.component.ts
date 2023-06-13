import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'blog-item-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';

  constructor(private service: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['imgURL'];
      this.text = res['text'];
    });
  }
}
