import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAddResponse,
  INoteToBackEnd,
} from '../../interfaces/addNotes/add-notes';
import { environment } from '../../environment/environment';
import { IGetNotesResponse } from '../../interfaces/getUserNotes/get-user-notes';
import {
  IUpDateNoteToBackEnd,
  IUpDateResponse,
} from '../../interfaces/updateNote/update-note';

@Injectable({
  providedIn: 'root',
})
export class NoteOperationsService {
  // Call Services
  private readonly httpClient: HttpClient = inject(HttpClient);

  /*
  ====================================
  - Methods 
  ====================================
  */

  /*
  ==================================================
  1) ------> Add New Note
  ==================================================
  */
  addNewNote(newNoteValue: INoteToBackEnd): Observable<IAddResponse> {
    return this.httpClient.post<IAddResponse>(
      `${environment.baseURL}/notes`,
      newNoteValue
    );
  }

  /*
  ==================================================
  2) ------> Get All User Notes
  ==================================================
  */
  getUserNote(): Observable<IGetNotesResponse> {
    return this.httpClient.get<IGetNotesResponse>(
      `${environment.baseURL}/notes`
    );
  }

  /*
  ==================================================
  3) ------> Delete Specific Note
  ==================================================
  */
  deleteNote(id: string): Observable<{ msg: string }> {
    return this.httpClient.delete<{ msg: string }>(
      `${environment.baseURL}/notes/${id}`
    );
  }

  /*
  ==================================================
  4) ------> Update Specific Note
  ==================================================
  */
  updateNote(
    id: string,
    updatedNote: IUpDateNoteToBackEnd
  ): Observable<IUpDateResponse> {
    return this.httpClient.put<IUpDateResponse>(
      `${environment.baseURL}/notes/${id}`,
      updatedNote
    );
  }
}
