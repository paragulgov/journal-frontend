import { IUserModel } from '../../user/types/UserTypes';
import { IArticleModel } from '../../../types/types';

export interface ICommentModel {
  id: number;
  text: string;

  user: IUserModel;
  article?: IArticleModel;

  createdAt: string;
  updatedAt: string;
}

export interface ICommentValues {
  text: string;
}

export interface ICommentDto {
  text: string;
}

export interface ILikeModel {
  type: 'like' | 'unlike' | 'dislike' | 'undislike';
  message: string;
}

export interface ILikeDto {
  type: 'like' | 'dislike';
}