import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SChatComponent } from './schat.component';

describe('SChatComponent', () => {
  let component: SChatComponent;
  let fixture: ComponentFixture<SChatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
