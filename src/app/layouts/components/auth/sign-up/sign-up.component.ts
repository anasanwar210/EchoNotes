import { PassTypeService } from './../../../../core/services/passType/pass-type.service';
import { AuthService } from './../../../../core/services/auth/auth.service';
import { Component, inject } from '@angular/core';
import { MainTitleComponent } from '../../../shared/main-title/main-title.component';
import { ModeComponent } from '../../../shared/mode/mode.component';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [
    MainTitleComponent,
    ModeComponent,
    RouterLink,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  // Properties
  errMsg: string | null = null;
  resState: boolean = false;
  isErrorHidden: boolean = false;

  // Call Services
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  public passTypeService: PassTypeService = inject(PassTypeService);

  // Form Group
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,20}$/),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,}$/),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(1[89]|[2-9][0-9])$/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(01[0125][0-9]{8})$/),
    ]),
  });

  // Methods
  submitSignUp(): void {
    if (this.signUpForm.valid) {
      this.resState = true;
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: (res) => {
          this.resState = false;
          this.errMsg = null;
          this.router.navigate(['/signin']);
          this.signUpForm.reset();
        },
        error: (err) => {
          this.resState = false;
          this.errMsg = err.error.msg;
        },
      });
    }
  }
}
