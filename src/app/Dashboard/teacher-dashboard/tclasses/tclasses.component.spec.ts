import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TClassesComponent } from './tclasses.component';

describe('TClassesComponent', () => {
  let component: TClassesComponent;
  let fixture: ComponentFixture<TClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
