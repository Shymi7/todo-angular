import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEdit } from './task-edit';

describe('BlogEditComponent', () => {
  let component: TaskEdit;
  let fixture: ComponentFixture<TaskEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEdit ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
