import { IUserModel } from '../../user/types/UserTypes';

export interface ICommentModel {
  id: number;
  text: string;

  user: IUserModel;

  createdAt: string;
  updatedAt: string;
}

export interface ICommentValues {
  text: string;
}

export interface ICommentDto {
  text: string;
}