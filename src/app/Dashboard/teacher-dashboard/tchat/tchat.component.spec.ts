import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TChatComponent } from './tchat.component';

describe('TChatComponent', () => {
  let component: TChatComponent;
  let fixture: ComponentFixture<TChatComponent>;

  beforeEach(async(() => {
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
