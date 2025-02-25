import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModeComponent } from '../../../shared/mode/mode.component';
import { LogoutComponent } from '../../../shared/logout/logout.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, ModeComponent, LogoutComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  // Properties
  isLogin: boolean = false;
  ID = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.ID)) {
      this.isLogin = !!localStorage.getItem('noteToken');
    }
  }
}
