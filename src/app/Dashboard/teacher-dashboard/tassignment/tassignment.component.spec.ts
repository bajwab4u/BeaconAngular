import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TAssignmentComponent } from './tassignment.component';

describe('TAssignmentComponent', () => {
  let component: TAssignmentComponent;
  let fixture: ComponentFixture<TAssignmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
