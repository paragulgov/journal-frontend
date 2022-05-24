import { instance } from '../../base/axios/instance';
import { IArticleModel } from '../../types/types';

const ArticleApi = {
  getOne(id: number) {
    return instance.get<IArticleModel>(`/articles/${id}`);
  },
};

export default ArticleApi;