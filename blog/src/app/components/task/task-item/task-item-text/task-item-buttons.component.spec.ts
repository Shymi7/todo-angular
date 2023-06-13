import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemButtonsComponent } from './task-item-buttons.component';

describe('BlogItemTextComponent', () => {
  let component: TaskItemButtonsComponent;
  let fixture: ComponentFixture<TaskItemButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
