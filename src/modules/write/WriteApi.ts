import { instance } from '../../base/axios/instance';
import { IArticleDto, IArticleModel } from './types/WriteTypes';
import { Nullable } from '../../base/types/BaseTypes';

const WriteApi = {
  getArticle(id: number) {
    return instance.get<IArticleModel>(`/articles/${id}`);
  },
  createArticle(dto: IArticleDto) {
    return instance.post<IArticleModel>('/articles', dto);
  },
  updateArticle(dto: IArticleDto, categoryId: Nullable<number>, id: number) {
    return instance.patch<IArticleModel>(`/articles/${id}`, dto);
  },
};

export default WriteApi;