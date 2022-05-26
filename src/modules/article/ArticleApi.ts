import { instance } from '../../base/axios/instance';
import { IArticleModel } from '../../types/types';
import { ICommentDto, ICommentModel } from './types/ArticleTypes';

const ArticleApi = {
  getOne(id: number) {
    return instance.get<IArticleModel>(`/articles/${id}`);
  },
  getComments(id: number) {
    return instance.get<ICommentModel[]>(`/comments/${id}`);
  },
  createComment(id: number, data: ICommentDto) {
    return instance.post<ICommentModel>(`/comments/${id}`, data);
  }
};

export default ArticleApi;