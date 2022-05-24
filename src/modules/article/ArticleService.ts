import ArticleApi from './ArticleApi';

export default class ArticleService {
  getOne = async (id: number) => {
    const res = await ArticleApi.getOne(id);
    return res.data;
  };
}
