import { makeAutoObservable } from 'mobx';
import { OutputBlockData } from '@editorjs/editorjs';
import WriteService from './WriteService';
import { Nullable } from '../../base/types/BaseTypes';
import { ErrorsHandling } from '../../base/utils/ErrorsHandling';
import Notification from '../../base/utils/NotificationUtil';

export class WriteStore {
  loading: boolean = false;

  newArticleValue: OutputBlockData[] = [];
  categoryId: Nullable<number> = null;

  private writeService: WriteService;

  constructor() {
    makeAutoObservable(this);

    this.writeService = new WriteService();
  }

  createNewArticle = () => {
    this.writeService.createArticle(this.newArticleValue, this.categoryId)
      .then(() => {
        Notification.showSuccess('Статья создана')
      })
      .catch((error) => {
        ErrorsHandling(error);
      });
  };

  setNewArticleValue = (value: OutputBlockData[]) => {
    this.newArticleValue = value;
  };

  setCategoryId = (value: number) => {
    this.categoryId = value;
  };

  resetStore = () => {
    this.loading = false;
  };
}
