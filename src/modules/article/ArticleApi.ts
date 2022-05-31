import { instance } from '../../axios/instance';
import { IArticleModel } from '../../types/types';
import { ICommentDto, ICommentModel, ILikeDto, ILikeModel } from './types/ArticleTypes';

const ArticleApi = {
  getOne(id: number) {
    return instance.get<IArticleModel>(`/articles/${id}`);
  },
  getComments(id: number) {
    return instance.get<ICommentModel[]>(`/comments/${id}`);
  },
  createComment(id: number, data: ICommentDto) {
    return instance.post<ICommentModel>(`/comments/${id}`, data);
  },
  createLikeDislike(articleId: number, data: ILikeDto) {
    return instance.post<ILikeModel>(`/like/article/${articleId}`, data);
  },
};

export default ArticleApi;