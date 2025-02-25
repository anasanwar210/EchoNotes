import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteOperationsService } from '../../../core/services/noteOperations/note-operations.service';
import { INote } from '../../../core/interfaces/getUserNotes/get-user-notes';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-note',
  imports: [ReactiveFormsModule],
  templateUrl: './current-note.component.html',
  styleUrl: './current-note.component.scss',
})
export class CurrentNoteComponent implements OnChanges {
  //  Properties
  @Output() noteAdded = new EventEmitter<void>();
  @Input() isViewNote!: boolean;
  @Input() curNote!: INote | null;
  @Output() closeViewNote = new EventEmitter<void>();
  noteId: any;
  isDeletePopupOpen: boolean = false;

  // Call Services
  noteOperationsService: NoteOperationsService = inject(NoteOperationsService);

  // Update Note Form
  updateNoteForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  // Hooks
  ngOnChanges() {
    if (this.curNote) {
      this.updateNoteForm.patchValue({
        title: this.curNote.title,
        content: this.curNote.content,
      });

      this.noteId = this.curNote._id;
      console.log('Note ID:', this.noteId);
    }
  }

  // Methods
  closeViewNotePopup() {
    this.closeViewNote.emit();
  }

  openDeletePopup() {
    this.isDeletePopupOpen = true;
  }

  closeDeletePopup() {
    this.isDeletePopupOpen = false;
  }

  confirmDelete() {
    this.deleteNote();
    this.closeDeletePopup();
  }

  /*
  ================================================
  1) -------> Update Note
  ================================================
  */
  updateNote() {
    this.noteOperationsService
      .updateNote(this.noteId, this.updateNoteForm.value)
      .subscribe({
        next: (res) => {
          this.closeViewNotePopup();
          this.updateNoteForm.reset();
          this.noteAdded.emit();
        },
      });
  }

  /*
  ================================================
  2) -------> Delete Note
  ================================================
  */
  deleteNote() {
    this.noteOperationsService.deleteNote(this.noteId).subscribe({
      next: (res) => {
        this.closeViewNotePopup();
        this.updateNoteForm.reset();
        this.noteAdded.emit();
      },
    });
  }
}
