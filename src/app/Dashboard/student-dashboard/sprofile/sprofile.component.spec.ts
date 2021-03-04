import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SProfileComponent } from './sprofile.component';

describe('SProfileComponent', () => {
  let component: SProfileComponent;
  let fixture: ComponentFixture<SProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
