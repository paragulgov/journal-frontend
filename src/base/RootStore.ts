import React from 'react';
import { AppStore } from '../modules/app/AppStore';
import { AuthStore } from '../modules/auth/AuthStore';

class RootStore {
  appStore: AppStore;
  authStore: AuthStore;

  constructor() {
    this.appStore = new AppStore();
    this.authStore = new AuthStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
