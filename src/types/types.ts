import { OutputBlockData } from '@editorjs/editorjs';
import { ICategoryModel } from '../modules/categories/types/CategoriesTypes';
import { IUserModel } from '../modules/user/types/UserTypes';
import { ICommentModel } from '../modules/article/types/ArticleTypes';

export interface IArticleModel {
  id: number;
  title: string;
  subtitle: string;
  content: OutputBlockData[];
  likesCount?: number;
  dislikesCount?: number;
  views: number;
  status: ArticleStatus;
  rejected: false;
  rejectedReason: string;

  comments: ICommentModel[];
  category: ICategoryModel;
  user: IUserModel;
  likes: ILike[];

  createdAt: string;
  updatedAt: string;
}

export interface ILike {
  type: 'like' | 'dislike';
  user: IUserModel;
}

export type ArticleStatus = 'published' | 'pending' | 'rejected'

export type Nullable<T> = T | null;