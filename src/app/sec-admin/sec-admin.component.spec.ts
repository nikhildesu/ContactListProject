import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAdminComponent } from './sec-admin.component';

describe('SecAdminComponent', () => {
  let component: SecAdminComponent;
  let fixture: ComponentFixture<SecAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
