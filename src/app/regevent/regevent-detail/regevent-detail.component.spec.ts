import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeventDetailComponent } from './regevent-detail.component';

describe('RegeventDetailComponent', () => {
  let component: RegeventDetailComponent;
  let fixture: ComponentFixture<RegeventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegeventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
