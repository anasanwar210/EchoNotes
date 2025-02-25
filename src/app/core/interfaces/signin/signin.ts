export interface ISignInResponse {
  msg?: string;
  token?: string;
  statusCode?: number;
}

export interface ISigninDataToBackEnd {
  email: string;
  password: string;
}
