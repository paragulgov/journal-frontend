import WriteApi from './WriteApi';
import { OutputBlockData } from '@editorjs/editorjs';
import { IArticleDto } from './types/WriteTypes';
import { Nullable } from '../../base/types/BaseTypes';

export default class WriteService {
  createArticle = async (article: OutputBlockData[], categoryId: Nullable<number>) => {
    const dto: IArticleDto = { content: article, categoryId };
    const res = await WriteApi.createArticle(dto);
    return res.data;
  };
}
