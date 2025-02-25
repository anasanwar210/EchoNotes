export interface ISignUpResponse {
  msg: string;
  statusCode?: number;
  user?: IUser;
}

export interface ISignUpDataToBackEnd {
  name: string;
  email: string;
  password: string;
  age: number;
  phone: string;
}

export interface IUser extends ISignUpDataToBackEnd {
  role: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
