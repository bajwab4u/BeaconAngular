import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TProfileComponent } from './tprofile.component';

describe('TProfileComponent', () => {
  let component: TProfileComponent;
  let fixture: ComponentFixture<TProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
