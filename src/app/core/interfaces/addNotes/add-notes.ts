export interface IAddResponse {
  msg: string;
  note: INote;
}

export interface INoteToBackEnd {
  title: string;
  content: string;
}

export interface INote extends INoteToBackEnd {
  createdBy: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
