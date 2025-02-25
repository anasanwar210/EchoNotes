import { Component, inject } from '@angular/core';
import { MainTitleComponent } from '../../../shared/main-title/main-title.component';
import { ModeComponent } from '../../../shared/mode/mode.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { PassTypeService } from '../../../../core/services/passType/pass-type.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [
    MainTitleComponent,
    ModeComponent,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  // Properties
  errMsg: string | null = null;
  resState: boolean = false;

  // Call Services
  public passType: PassTypeService = inject(PassTypeService);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  // Sign In Form
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,}$/),
    ]),
  });

  // Methods
  submitSignIn() {
    if (this.signInForm.valid) {
      this.resState = true;
      this.authService.signIn(this.signInForm.value).subscribe({
        next: (res: any) => {
          this.resState = false;
          this.signInForm.reset();
          localStorage.setItem('noteToken', `3b8ny__${res.token}`);
          this.router.navigate(['/notes']);
          console.log(res);
        },
        error: (err) => {
          this.resState = false;
          this.errMsg = err.error.msg;
        },
      });
    }
  }
}
