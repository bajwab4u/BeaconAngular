import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SClassesComponent } from './sclasses.component';

describe('SClassesComponent', () => {
  let component: SClassesComponent;
  let fixture: ComponentFixture<SClassesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
