import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TChatComponent } from './tchat.component';

describe('TChatComponent', () => {
  let component: TChatComponent;
  let fixture: ComponentFixture<TChatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
