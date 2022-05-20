import { makeAutoObservable } from 'mobx';
import CategoriesService from '../categories/CategoriesService';
import { ICategoryModel } from './types/CategoriesTypes';

export class CategoriesStore {
  loading: boolean = false;

  categories: ICategoryModel[] = [];

  private categoriesService: CategoriesService;

  constructor() {
    makeAutoObservable(this);

    this.categoriesService = new CategoriesService();
  }

  getAll = async () => {
    this.categoriesService.getAll()
      .then((res) => {
        this.setCategories(res);
        this.categories = res;
      });
  };

  setCategories = (data: ICategoryModel[]) => {
    this.categories = data;
  };

  resetStore = () => {
    this.loading = false;
  };
}
