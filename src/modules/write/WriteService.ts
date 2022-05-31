import WriteApi from './WriteApi';
import { OutputBlockData } from '@editorjs/editorjs';
import { IArticleDto } from './types/WriteTypes';
import { Nullable } from '../../types/types';

export default class WriteService {
  getArticle = async (id: number) => {
    const res = await WriteApi.getArticle(id);
    return res.data;
  };
  createArticle = async (article: OutputBlockData[], categoryId: Nullable<number>) => {
    const dto: IArticleDto = { content: article, categoryId };
    const res = await WriteApi.createArticle(dto);
    return res.data;
  };
  updateArticle = async (article: OutputBlockData[], categoryId: Nullable<number>, id: number) => {
    const dto: IArticleDto = { content: article, categoryId };
    const res = await WriteApi.updateArticle(dto, categoryId, id);
    return res.data;
  };
}
