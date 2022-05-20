import React from 'react';
import { AppStore } from '../modules/app/AppStore';
import { AuthStore } from '../modules/auth/AuthStore';
import { UserStore } from '../modules/user/UserStore';
import { WriteStore } from '../modules/write/WriteStore';
import { CategoriesStore } from '../modules/categories/CategoriesStore';

class RootStore {
  appStore: AppStore;
  authStore: AuthStore;
  userStore: UserStore;
  writeStore: WriteStore;
  categoriesStore: CategoriesStore;

  constructor() {
    this.appStore = new AppStore();
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
    this.writeStore = new WriteStore();
    this.categoriesStore = new CategoriesStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
