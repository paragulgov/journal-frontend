import { makeAutoObservable } from 'mobx';
import UserService from './UserService';
import { Nullable } from '../../base/types/BaseTypes';
import { IUserModel } from './types/UserTypes';
import { rootStore } from '../../base/RootStore';

export class UserStore {
  loading: boolean = false;

  userInfo: Nullable<IUserModel> = null;

  private userService: UserService;

  constructor() {
    makeAutoObservable(this);

    this.userService = new UserService();
  }

  getUserInfo = () => {
    this.userService.getUserInfo()
      .then(res => {
        this.setUserInfo(res);
        rootStore.authStore.setIsAuth(true);
      })
      .catch((error) => {
        rootStore.authStore.removeToken();
        console.warn(error);
      })
      .finally(() => {
        rootStore.authStore.setCompleteCheckAuth(true);
      });
  };

  setUserInfo = (user: IUserModel) => {
    this.userInfo = user;
  };

  resetStore = () => {
    this.loading = false;
    this.userInfo = null;
  };
}
