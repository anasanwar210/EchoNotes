import { Routes } from '@angular/router';
import { SignInComponent } from './layouts/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './layouts/components/auth/sign-up/sign-up.component';
import { NotesComponent } from './layouts/components/pages/notes/notes.component';
import { NotFoundComponent } from './layouts/components/pages/not-found/not-found.component';
import { authGuard } from './core/auth/auth.guard';
import { isGuestGuard } from './core/guest/is-guest.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    component: SignInComponent,
    title: 'Sign In',
    canActivate: [isGuestGuard],
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'Sign Up',
    canActivate: [isGuestGuard],
  },
  {
    path: 'notes',
    component: NotesComponent,
    title: 'Echo Notes',
    canActivate: [authGuard],
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
