import { makeAutoObservable } from 'mobx';
import { IArticleModel } from '../../types/types';
import ArticleService from './ArticleService';
import { Nullable } from '../../base/types/BaseTypes';
import { ICommentModel, ICommentValues, ILikeDto } from './types/ArticleTypes';
import { ErrorsHandling } from '../../base/utils/ErrorsHandling';
import { rootStore } from '../../base/RootStore';
import Notification from '../../base/utils/NotificationUtil';

const initialCommentValues: ICommentValues = { text: '' };

export class ArticleStore {
  loading: boolean = false;

  article: Nullable<IArticleModel> = null;
  likedArticle: boolean = false;
  dislikedArticle: boolean = false;

  commentValues: ICommentValues = initialCommentValues;
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

  createLikeDislike = (type: ILikeDto) => {
    if (this.article) {
      this.articleService.createLikeDislike(this.article?.id, type)
        .then(res => {
          if (res.type === 'like') {
            this.setLikeToArticle(true);
            this.setDislikeToArticle(false);
          }
          if (res.type === 'dislike') {
            this.setLikeToArticle(false);
            this.setDislikeToArticle(true);
          }
          if (res.type === 'unlike') {
            this.setLikeToArticle(true);
          }
          if (res.type === 'undislike') {
            this.setDislikeToArticle(false);
          }
          Notification.showSuccess(res.message);
        });
    }
  };

  checkLikeDislike = () => {
    const userId = rootStore.userStore.userInfo?.id;
    const liked = this.article?.likes.find(el => el.user.id === userId);

    if (liked && liked.type === 'like') {
      this.setLikeToArticle(true);
    }
    if (liked && liked.type === 'dislike') {
      this.setDislikeToArticle(true);
    }
  };

  setLikeToArticle = (like: boolean) => {
    this.likedArticle = like;
  };

  setDislikeToArticle = (dislike: boolean) => {
    this.dislikedArticle = dislike;
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
