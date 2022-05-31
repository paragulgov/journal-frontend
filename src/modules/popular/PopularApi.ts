import { instance } from '../../axios/instance';
import { IArticleModel } from '../../types/types';

const PopularApi = {
  getPopular() {
    return instance.get<IArticleModel[]>(`/articles`);
  },
};

export default PopularApi;