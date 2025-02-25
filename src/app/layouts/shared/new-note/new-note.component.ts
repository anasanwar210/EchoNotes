import { NgClass } from '@angular/common';
import { NoteOperationsService } from './../../../core/services/noteOperations/note-operations.service';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotesComponent } from '../../components/pages/notes/notes.component';

@Component({
  selector: 'app-new-note',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss',
})
export class NewNoteComponent {
  //  Properties
  @Output() noteAdded = new EventEmitter<void>();
  @Input() isNewNote!: boolean;
  @Output() closeNewNote = new EventEmitter<void>();
  resState: boolean = false;

  // Call Services
  noteOperationsService: NoteOperationsService = inject(NoteOperationsService);

  // New Note Form
  newNoteForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
  });

  // Methods
  closeNewNotePopup() {
    this.closeNewNote.emit();
  }

  /*
  ================================================
  1) -------> adding new note
  ================================================
  */
  addNewNote() {
    if (this.newNoteForm.valid) {
      this.resState = true;
      this.noteOperationsService.addNewNote(this.newNoteForm.value).subscribe({
        next: (res) => {
          this.resState = false;
          this.closeNewNotePopup();
          this.newNoteForm.reset();
          this.noteAdded.emit();
          console.log(res);
        },
        error: (err) => {
          this.resState = false;
          console.log(err);
        },
      });
    }
  }
}
