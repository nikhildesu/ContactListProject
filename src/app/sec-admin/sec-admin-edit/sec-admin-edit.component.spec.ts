import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAdminEditComponent } from './sec-admin-edit.component';

describe('SecAdminEditComponent', () => {
  let component: SecAdminEditComponent;
  let fixture: ComponentFixture<SecAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
