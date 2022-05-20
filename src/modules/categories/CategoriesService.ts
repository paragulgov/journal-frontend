import CategoriesApi from './CategoriesApi';

export default class CategoriesService {
  getAll = async () => {
    const res = await CategoriesApi.getAll();
    return res.data;
  };
}
