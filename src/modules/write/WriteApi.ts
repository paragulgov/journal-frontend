import { instance } from '../../axios/instance';
import { IArticleDto} from './types/WriteTypes';
import { IArticleModel, Nullable } from '../../types/types';

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