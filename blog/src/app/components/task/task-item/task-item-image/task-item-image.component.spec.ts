import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemImageComponent } from './task-item-image.component';

describe('BlogItemImageComponent', () => {
  let component: TaskItemImageComponent;
  let fixture: ComponentFixture<TaskItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
