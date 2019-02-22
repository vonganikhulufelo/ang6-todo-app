import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteuserComponent } from './upadteuser.component';

describe('UpadteuserComponent', () => {
  let component: UpadteuserComponent;
  let fixture: ComponentFixture<UpadteuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadteuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
