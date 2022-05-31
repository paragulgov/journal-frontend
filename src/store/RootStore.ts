import React from 'react';
import { AppStore } from '../modules/app/AppStore';
import { AuthStore } from '../modules/auth/AuthStore';
import { UserStore } from '../modules/user/UserStore';
import { WriteStore } from '../modules/write/WriteStore';
import { CategoriesStore } from '../modules/categories/CategoriesStore';
import { PopularStore } from '../modules/popular/PopularStore';
import { ArticleStore } from '../modules/article/ArticleStore';

class RootStore {
  appStore: AppStore;
  authStore: AuthStore;
  userStore: UserStore;
  writeStore: WriteStore;
  categoriesStore: CategoriesStore;
  popularStore: PopularStore;
  articleStore: ArticleStore;

  constructor() {
    this.appStore = new AppStore();
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
    this.writeStore = new WriteStore();
    this.categoriesStore = new CategoriesStore();
    this.popularStore = new PopularStore();
    this.articleStore = new ArticleStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
