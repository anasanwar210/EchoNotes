import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isAuthenticated = !!localStorage.getItem('noteToken');

  if (!isAuthenticated) {
    router.navigate(['/signin']);
    return false;
  }

  return true;
};
