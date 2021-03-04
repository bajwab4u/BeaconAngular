import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SQuizComponent } from './squiz.component';

describe('SQuizComponent', () => {
  let component: SQuizComponent;
  let fixture: ComponentFixture<SQuizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
