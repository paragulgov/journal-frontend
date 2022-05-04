import { makeAutoObservable } from 'mobx';
import { IRegisterValues } from './types/RegisterTypes';
import AuthService from './AuthService';
import { instance } from '../../base/axios/instance';
import { ErrorsHandling } from '../../base/utils/ErrorsHandling';
import Notification from '../../base/utils/NotificationUtil';

const initialValues: IRegisterValues = {
  username: '',
  password: '',
};

export class AuthStore {
  loading = false;
  isAuth = false;
  errorMessages: any = {};
  values: IRegisterValues = initialValues;

  private authService: AuthService;

  constructor() {
    makeAutoObservable(this);

    this.authService = new AuthService();
  }

  get disabledButton() {
    return this.values.username.length === 0 || this.values.password.length === 0;
  }

  setValues = (values: IRegisterValues) => {
    this.values = values;
  };

  register = () => {
    this.authService.register(this.values)
      .then((res) => {
        this.setToken(res.token);
        this.setIsAuth(true);
        Notification.showSuccess('Вход выполнен успешно');
      })
      .catch((error) => {
        ErrorsHandling(error);
      });
  };

  setIsAuth = (value: boolean) => {
    this.isAuth = value;
  };

  setToken = (token: string) => {
    localStorage.setItem('token', token);
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  removeToken = () => {
    localStorage.removeItem('token');
    instance.defaults.headers.common['Authorization'] = '';
  };

  resetStore = () => {
    this.loading = false;
    this.errorMessages = {};
    this.values = initialValues;
  };
}
