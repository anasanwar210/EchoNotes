import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import {
  ISignUpDataToBackEnd,
  ISignUpResponse,
} from '../../interfaces/signup/signup';
import {
  ISigninDataToBackEnd,
  ISignInResponse,
} from '../../interfaces/signin/signin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Call Services
  httpClient: HttpClient = inject(HttpClient);

  // Sign Up Method
  signUp(formValue: ISignUpDataToBackEnd): Observable<ISignUpResponse> {
    return this.httpClient.post<ISignUpResponse>(
      `${environment.baseURL}/users/signUp`,
      formValue
    );
  }

  // Sign In Method
  signIn(formValue: ISigninDataToBackEnd): Observable<ISignInResponse> {
    return this.httpClient.post<ISignInResponse>(
      `${environment.baseURL}/users/signIn`,
      formValue
    );
  }
}
