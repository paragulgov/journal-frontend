import { OutputBlockData } from '@editorjs/editorjs';
import { ICategoryModel } from '../modules/categories/types/CategoriesTypes';
import { IUserModel } from '../modules/user/types/UserTypes';

export interface IArticleModel {
  id: number;
  title: string;
  subtitle: string;
  content: OutputBlockData[];

  category: ICategoryModel;
  user: IUserModel;

  createdAt: string;
  updatedAt: string;
}