import { makeAutoObservable } from 'mobx';
import { IArticleModel } from '../../types/types';
import ArticleService from './ArticleService';
import { Nullable } from '../../base/types/BaseTypes';
import { ICommentModel, ICommentValues } from './types/ArticleTypes';
import { ErrorsHandling } from '../../base/utils/ErrorsHandling';

const initialCommentValues: ICommentValues = { text: '' };

export class ArticleStore {
  loading: boolean = false;

  commentValues: ICommentValues = initialCommentValues;

  article: Nullable<IArticleModel> = null;
  comments: ICommentModel[] = [];

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

  getComments = (id: number) => {
    this.articleService.getComments(id)
      .then(res => {
        this.setComments(res);
      });
  };

  createComment = () => {
    if (!this.article) return;

    this.articleService.createComment(this.article?.id, this.commentValues)
      .then(res => {
        this.comments.unshift(res);
      })
      .catch(err => {
        ErrorsHandling(err);
      });
  };

  setArticle = (value: IArticleModel) => {
    this.article = value;
  };

  setComments = (data: ICommentModel[]) => {
    this.comments = data;
  };

  setCommentValues = (values: ICommentValues) => {
    this.commentValues = values;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  resetStore = () => {
    this.loading = false;

    this.article = null;
    this.comments = [];
  };
}
