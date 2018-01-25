import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeventComponent } from './regevent.component';

describe('RegeventComponent', () => {
  let component: RegeventComponent;
  let fixture: ComponentFixture<RegeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
