import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoauthcomponentComponent } from './checkoauthcomponent.component';

describe('CheckoauthcomponentComponent', () => {
  let component: CheckoauthcomponentComponent;
  let fixture: ComponentFixture<CheckoauthcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoauthcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoauthcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
