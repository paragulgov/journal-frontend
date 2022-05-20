import { OutputBlockData } from '@editorjs/editorjs';
import { Nullable } from '../../../base/types/BaseTypes';

export interface IArticleModel {
  id: number;
  content: string;
}

export interface IArticleDto {
  content: OutputBlockData[];
  categoryId: Nullable<number>;
}
