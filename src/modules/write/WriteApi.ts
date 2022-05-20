import { instance } from '../../base/axios/instance';
import { IArticleDto, IArticleModel } from './types/WriteTypes';

const WriteApi = {
  createArticle(dto: IArticleDto) {
    return instance.post<IArticleModel>('/articles', dto);
  },
};

export default WriteApi;