import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiceventComponent } from './picevent.component';

describe('PiceventComponent', () => {
  let component: PiceventComponent;
  let fixture: ComponentFixture<PiceventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiceventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiceventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
