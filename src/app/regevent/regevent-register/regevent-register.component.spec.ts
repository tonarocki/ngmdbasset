import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeventRegisterComponent } from './regevent-register.component';

describe('RegeventRegisterComponent', () => {
  let component: RegeventRegisterComponent;
  let fixture: ComponentFixture<RegeventRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeventRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegeventRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
