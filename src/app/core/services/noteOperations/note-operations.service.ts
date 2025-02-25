import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAddResponse,
  INoteToBackEnd,
} from '../../interfaces/addNotes/add-notes';
import { environment } from '../../environment/environment';
import { IGetNotesResponse } from '../../interfaces/getUserNotes/get-user-notes';

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
}
