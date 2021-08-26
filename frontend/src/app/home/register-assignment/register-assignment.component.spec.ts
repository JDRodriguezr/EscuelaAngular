import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssignmentComponent } from './register-assignment.component';

describe('RegisterAssignmentComponent', () => {
  let component: RegisterAssignmentComponent;
  let fixture: ComponentFixture<RegisterAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
