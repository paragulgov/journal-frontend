import React from 'react';
import { AppStore } from '../modules/app/AppStore';

class RootStore {
  appStore: AppStore;

  constructor() {
    this.appStore = new AppStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
