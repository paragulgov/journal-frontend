import { OutputBlockData } from '@editorjs/editorjs';
import { Nullable } from '../../../base/types/BaseTypes';

export interface IArticleDto {
  content: OutputBlockData[];
  categoryId: Nullable<number>;
}
