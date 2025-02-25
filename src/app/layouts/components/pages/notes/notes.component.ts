import { INote } from './../../../../core/interfaces/getUserNotes/get-user-notes';
import { NoteOperationsService } from './../../../../core/services/noteOperations/note-operations.service';
import {
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { MainTitleComponent } from '../../../shared/main-title/main-title.component';
import { ModeComponent } from '../../../shared/mode/mode.component';
import { LogoutComponent } from '../../../shared/logout/logout.component';
import { NewNoteComponent } from '../../../shared/new-note/new-note.component';
import { isPlatformBrowser } from '@angular/common';
import { CurrentNoteComponent } from '../../../shared/current-note/current-note.component';
import { SearchPipe } from '../../../../core/pipe/search/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [
    MainTitleComponent,
    ModeComponent,
    LogoutComponent,
    NewNoteComponent,
    CurrentNoteComponent,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  // Properties
  isNewNote: WritableSignal<boolean> = signal(false);
  isViewNote: WritableSignal<boolean> = signal(false);
  private readonly ID = inject(PLATFORM_ID);
  allNotes: INote[] = [];
  curNote: WritableSignal<INote | null> = signal(null);
  searchValue: string = '';

  // Call Services
  private readonly noteOperationsService: NoteOperationsService = inject(
    NoteOperationsService
  );

  // Hooks
  ngOnInit(): void {
    if (isPlatformBrowser(this.ID)) {
      if (localStorage.getItem('noteToken')) {
        this.getUserNotes();
      }
    }
  }

  // Methods
  toggleVisibility(): void {
    this.isNewNote.update((v) => !v);
    console.log('isNewNote:', this.isNewNote());
  }

  viewNote(): void {
    this.isViewNote.update((v) => !v);
    console.log('isViewNote:', this.isViewNote());
  }

  currentNote(note: any): void {
    this.curNote.set(note);
    console.log('Current Note:', this.curNote());
  }

  /*
  ===================================
  1) ----> Get All User Notes
  ===================================
  */
  getUserNotes(): void {
    this.noteOperationsService.getUserNote().subscribe({
      next: (res) => {
        this.allNotes = res.notes;
        console.log(this.allNotes);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  /*
  ===================================
  2) ----> Delete Specific Note
  ===================================
  */
  deleteNote(id: string): void {
    this.noteOperationsService.deleteNote(id).subscribe({
      next: () => {
        console.log('Note deleted successfully');
        this.getUserNotes();
      },
    });
  }
}
