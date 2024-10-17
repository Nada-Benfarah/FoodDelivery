import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { INTRO_KEY, StorageService } from '../services/storage.service';

export const introGuard: CanMatchFn = async (route, segments) => {
  const storage = inject(StorageService);
  const router = inject(Router);

  console.log(await storage.getItem(INTRO_KEY));
  if (!(await storage.getItem(INTRO_KEY))) {
    router.navigate(['/intro'], { replaceUrl: true });
    return false;
  }
  return true;
};
