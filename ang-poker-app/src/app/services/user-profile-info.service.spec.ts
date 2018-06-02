import { TestBed, inject } from '@angular/core/testing';

import { UserProfileInfoService } from './user-profile-info.service';

describe('UserProfileInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileInfoService]
    });
  });

  it('should be created', inject([UserProfileInfoService], (service: UserProfileInfoService) => {
    expect(service).toBeTruthy();
  }));
});
