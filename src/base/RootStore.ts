import React from 'react';
import { AppStore } from '../modules/app/AppStore';
import { AuthStore } from '../modules/auth/AuthStore';
import { UserStore } from '../modules/user/UserStore';

class RootStore {
  appStore: AppStore;
  authStore: AuthStore;
  userStore: UserStore;

  constructor() {
    this.appStore = new AppStore();
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
