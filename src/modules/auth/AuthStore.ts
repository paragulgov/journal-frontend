import { makeAutoObservable } from 'mobx';

export class AuthStore {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }
}