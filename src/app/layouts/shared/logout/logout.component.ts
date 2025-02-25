import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  router: Router = inject(Router);
  logout() {
    localStorage.removeItem('noteToken');
    this.router.navigate(['/signin']);
  }
}
