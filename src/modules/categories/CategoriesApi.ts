import { instance } from '../../base/axios/instance';
import { ICategoryModel } from './types/CategoriesTypes';

const CategoriesApi = {
  getAll() {
    return instance.get<ICategoryModel[]>('/categories');
  },
};

export default CategoriesApi;