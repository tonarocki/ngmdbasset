import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRegisterComponent } from './song-register.component';

describe('SongRegisterComponent', () => {
  let component: SongRegisterComponent;
  let fixture: ComponentFixture<SongRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
