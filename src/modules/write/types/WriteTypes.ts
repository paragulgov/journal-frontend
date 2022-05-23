import { OutputBlockData } from '@editorjs/editorjs';
import { Nullable } from '../../../base/types/BaseTypes';
import { ICategoryModel } from '../../categories/types/CategoriesTypes';
import { IUserModel } from '../../user/types/UserTypes';

export interface IArticleModel {
  id: number;
  content: OutputBlockData[];
  category: ICategoryModel;
  user: IUserModel;

  createdAt: string;
  updatedAt: string;
}

export interface IArticleDto {
  content: OutputBlockData[];
  categoryId: Nullable<number>;
}
