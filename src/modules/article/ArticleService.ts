import ArticleApi from './ArticleApi';
import { ICommentDto, ICommentValues } from './types/ArticleTypes';

export default class ArticleService {
  getOne = async (id: number) => {
    const res = await ArticleApi.getOne(id);
    return res.data;
  };
  getComments = async (id: number) => {
    const res = await ArticleApi.getComments(id);
    return res.data;
  };
  createComment = async (id: number, data: ICommentValues) => {
    const res = await ArticleApi.createComment(id, data);
    return res.data;
  };
}
