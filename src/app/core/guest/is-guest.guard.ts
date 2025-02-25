import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isGuestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const isAuthenticated = !!localStorage.getItem('noteToken');

    if (isAuthenticated) {
      router.navigate(['/notes']);
      return false;
    }
  }

  return true;
};
