import { makeAutoObservable } from 'mobx';
import PopularService from './PopularService';
import { IArticleModel } from '../../types/types';

export class PopularStore {
  loading: boolean = false;

  popularArticles: IArticleModel[] = [];

  private popularService: PopularService;

  constructor() {
    makeAutoObservable(this);

    this.popularService = new PopularService();
  }

  getPopular = () => {
    this.setLoading(true);

    this.popularService.getPopular()
      .then(res => {
        this.setPopular(res);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  setPopular = (value: IArticleModel[]) => {
    this.popularArticles = value;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  resetStore = () => {
    this.loading = false;

    this.popularArticles = [];
  };
}
