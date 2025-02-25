export interface IUpDateResponse {
  msg: string;
  note: IUpDateNote;
}

export interface IUpDateNoteToBackEnd {
  title: string;
  content: string;
}

export interface IUpDateNote extends IUpDateNoteToBackEnd {
  _id: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
