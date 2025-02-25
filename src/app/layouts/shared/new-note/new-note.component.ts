import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-new-note',
  imports: [],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss',
})
export class NewNoteComponent {
  //  Properties
  @Input() isNewNote!: boolean;
  @Output() closeNewNote = new EventEmitter<void>();

  // Methods
  closeNewNotePopup() {
    this.closeNewNote.emit();
  }
}
