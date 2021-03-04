import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SAssignmentComponent } from './sassignment.component';

describe('SAssignmentComponent', () => {
  let component: SAssignmentComponent;
  let fixture: ComponentFixture<SAssignmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
