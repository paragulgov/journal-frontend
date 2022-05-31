import { OutputBlockData } from '@editorjs/editorjs';
import { Nullable } from '../../../types/types';

export interface IArticleDto {
  content: OutputBlockData[];
  categoryId: Nullable<number>;
}
