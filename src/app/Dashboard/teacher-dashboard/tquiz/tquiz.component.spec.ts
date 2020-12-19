import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TQuizComponent } from './tquiz.component';

describe('TQuizComponent', () => {
  let component: TQuizComponent;
  let fixture: ComponentFixture<TQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
