import { Routes } from '@angular/router';
import { SignInComponent } from './layouts/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './layouts/components/auth/sign-up/sign-up.component';
import { NotesComponent } from './layouts/components/pages/notes/notes.component';
import { NotFoundComponent } from './layouts/components/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent, title: 'Sign In' },
  { path: 'signup', component: SignUpComponent, title: 'Sign Up' },
  { path: 'notes', component: NotesComponent, title: 'Echo Notes' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
