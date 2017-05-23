import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodAdminComponent } from './wod-admin.component';

describe('WodAdminComponent', () => {
  let component: WodAdminComponent;
  let fixture: ComponentFixture<WodAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
