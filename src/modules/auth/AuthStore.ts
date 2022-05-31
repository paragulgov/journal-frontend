import { makeAutoObservable } from 'mobx';
import { IRegisterValues } from './types/RegisterTypes';
import AuthService from './AuthService';
import { instance } from '../../axios/instance';
import { ErrorsHandling } from '../../utils/ErrorsHandling';
import Notification from '../../utils/NotificationUtil';
import { ILoginValues } from './types/LoginTypes';
import { rootStore } from '../../store/RootStore';

const initialRegisterValues: IRegisterValues = {
  username: '',
  password: '',
};

const initialLoginValues: ILoginValues = {
  username: '',
  password: '',
};

export class AuthStore {
  loading: boolean = false;
  isAuth: boolean = false;
  completeCheckAuth: boolean = false;

  registerValues: IRegisterValues = initialRegisterValues;
  loginValues: ILoginValues = initialLoginValues;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);

    this.authService = new AuthService();
  }

  get disabledRegisterButton() {
    return this.registerValues.username.length === 0 || this.registerValues.password.length === 0;
  }

  get disabledLoginButton() {
    return this.loginValues.username.length === 0 || this.loginValues.password.length === 0;
  }

  register = () => {
    this.authService.register(this.registerValues)
      .then((res) => {
        this.setToken(res.token);
        rootStore.userStore.setUserInfo(res.userInfo);
        Notification.showSuccess('Регистрация выполнена успешно');
      })
      .catch((error) => {
        ErrorsHandling(error);
      })
      .finally(() => {
        this.setCompleteCheckAuth(true);
      });
  };

  login = () => {
    this.authService.login(this.loginValues)
      .then((res) => {
        this.setToken(res.token);
        rootStore.userStore.setUserInfo(res.userInfo);
        Notification.showSuccess('Вход выполнен успешно');
      })
      .catch((error) => {
        ErrorsHandling(error);
      })
      .finally(() => {
        this.setCompleteCheckAuth(true);
      });
  };

  checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      rootStore.userStore.getUserInfo();
    } else {
      this.setIsAuth(false);
      this.setCompleteCheckAuth(true);
    }
  };

  setRegisterValues = (values: IRegisterValues) => {
    this.registerValues = values;
  };

  setLoginValues = (values: ILoginValues) => {
    this.loginValues = values;
  };

  setToken = (token: string) => {
    localStorage.setItem('token', token);
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    this.setIsAuth(true);
  };

  removeToken = () => {
    localStorage.removeItem('token');
    instance.defaults.headers.common['Authorization'] = '';
    this.setIsAuth(false);
  };

  setIsAuth = (value: boolean) => {
    this.isAuth = value;
  };

  setCompleteCheckAuth = (value: boolean) => {
    this.completeCheckAuth = value;
  };

  resetStore = () => {
    this.loading = false;

    this.registerValues = initialRegisterValues;
    this.loginValues = initialLoginValues;
  };
}
