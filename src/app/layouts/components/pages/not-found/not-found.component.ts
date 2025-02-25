import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModeComponent } from '../../../shared/mode/mode.component';
import { LogoutComponent } from '../../../shared/logout/logout.component';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, ModeComponent, LogoutComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
