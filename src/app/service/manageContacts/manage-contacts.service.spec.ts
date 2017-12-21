import { TestBed, inject } from '@angular/core/testing';

import { ManageContactsService } from './manage-contacts.service';

describe('ManageContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageContactsService]
    });
  });

  it('should be created', inject([ManageContactsService], (service: ManageContactsService) => {
    expect(service).toBeTruthy();
  }));
});
