import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitestbedComponent } from './apitestbed.component';

describe('ApitestbedComponent', () => {
  let component: ApitestbedComponent;
  let fixture: ComponentFixture<ApitestbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApitestbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitestbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
