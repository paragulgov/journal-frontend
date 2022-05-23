import { makeAutoObservable } from 'mobx';
import { OutputBlockData } from '@editorjs/editorjs';
import WriteService from './WriteService';
import { Nullable } from '../../base/types/BaseTypes';
import { ErrorsHandling } from '../../base/utils/ErrorsHandling';
import Notification from '../../base/utils/NotificationUtil';

export class WriteStore {
  loading: boolean = false;

  articleValue: OutputBlockData[] = [];
  categoryId: Nullable<number> = null;
  categoryName: string = '';

  private writeService: WriteService;

  constructor() {
    makeAutoObservable(this);

    this.writeService = new WriteService();
  }

  getArticle = (id: number) => {
    this.setLoading(true);

    this.writeService.getArticle(id)
      .then(res => {
        this.setArticleValue(res.content);
        this.setCategoryId(res.category.id);
        this.setCategoryName(res.category.name);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  createArticle = () => {
    this.writeService.createArticle(this.articleValue, this.categoryId)
      .then(() => {
        Notification.showSuccess('Статья создана');
      })
      .catch((error) => {
        ErrorsHandling(error);
      });
  };

  updateArticle = (id: number) => {
    this.writeService.updateArticle(this.articleValue, this.categoryId, id)
      .then(() => {
        Notification.showSuccess('Статья обновлена');
      })
      .catch((error) => {
        ErrorsHandling(error);
      });
  };

  setArticleValue = (value: OutputBlockData[]) => {
    this.articleValue = value;
  };

  setCategoryId = (id: number) => {
    this.categoryId = id;
  };

  setCategoryName = (name: string) => {
    this.categoryName = name;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  resetStore = () => {
    this.loading = false;

    this.articleValue = [];
    this.categoryId = null;
    this.categoryName = '';
  };
}
