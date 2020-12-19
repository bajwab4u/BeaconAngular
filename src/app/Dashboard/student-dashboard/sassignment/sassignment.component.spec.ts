import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAssignmentComponent } from './sassignment.component';

describe('SAssignmentComponent', () => {
  let component: SAssignmentComponent;
  let fixture: ComponentFixture<SAssignmentComponent>;

  beforeEach(async(() => {
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
