import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { MainTitleComponent } from '../../../shared/main-title/main-title.component';
import { ModeComponent } from '../../../shared/mode/mode.component';
import { LogoutComponent } from '../../../shared/logout/logout.component';
import { NewNoteComponent } from '../../../shared/new-note/new-note.component';

@Component({
  selector: 'app-notes',
  imports: [
    MainTitleComponent,
    ModeComponent,
    LogoutComponent,
    NewNoteComponent,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  // Properties
  isNewNote: WritableSignal<boolean> = signal(false);

  // Methods
  toggleVisibility() {
    this.isNewNote.update((v) => !v);
    console.log('isNewNote:', this.isNewNote());
  }
}
