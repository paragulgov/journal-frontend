import { makeAutoObservable } from 'mobx';
import { IArticleModel } from '../../types/types';
import ArticleService from './ArticleService';
import { Nullable } from '../../base/types/BaseTypes';

export class ArticleStore {
  loading: boolean = false;

  article: Nullable<IArticleModel> = null;

  private articleService: ArticleService;

  constructor() {
    makeAutoObservable(this);

    this.articleService = new ArticleService();
  }

  getOne = (id: number) => {
    this.setLoading(true);

    this.articleService.getOne(id)
      .then(res => {
        this.setArticle(res);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  setArticle = (value: IArticleModel) => {
    this.article = value;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  resetStore = () => {
    this.loading = false;

    this.article = null;
  };
}
