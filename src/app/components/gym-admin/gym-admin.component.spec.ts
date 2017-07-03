import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAdminComponent } from './gym-admin.component';

describe('GymAdminComponent', () => {
  let component: GymAdminComponent;
  let fixture: ComponentFixture<GymAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
