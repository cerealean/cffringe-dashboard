import { TestBed, async, inject } from '@angular/core/testing';

import { UserSettingsDeactivateGuard } from './user-settings-deactivate.guard';

describe('UserSettingsDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSettingsDeactivateGuard]
    });
  });

  it('should ...', inject([UserSettingsDeactivateGuard], (guard: UserSettingsDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
