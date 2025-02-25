import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PassTypeService {
  constructor() {}
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    const eyeIcon = document.getElementById('eyeIcon') as HTMLElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  }
}
