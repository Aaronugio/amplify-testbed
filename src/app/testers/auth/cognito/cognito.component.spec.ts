import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitoComponent } from './cognito.component';

describe('CognitoComponent', () => {
  let component: CognitoComponent;
  let fixture: ComponentFixture<CognitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
