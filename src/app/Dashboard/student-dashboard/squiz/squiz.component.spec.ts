import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SQuizComponent } from './squiz.component';

describe('SQuizComponent', () => {
  let component: SQuizComponent;
  let fixture: ComponentFixture<SQuizComponent>;

  beforeEach(async(() => {
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
