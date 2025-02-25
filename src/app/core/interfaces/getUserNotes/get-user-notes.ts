export interface IGetNotesResponse {
  msg: string;
  notes: INote[];
}

export interface INote {
  _id: string;
  title: string;
  content: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
