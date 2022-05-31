import { instance } from '../../axios/instance';
import { IRegisterDto, IRegisterModel } from './types/RegisterTypes';
import { ILoginDto, ILoginModel } from './types/LoginTypes';

const AuthApi = {
  register(data: IRegisterDto) {
    return instance.post<IRegisterModel>('/auth/register', data);
  },
  login(data: ILoginDto) {
    return instance.post<ILoginModel>('/auth/login', data);
  },
};

export default AuthApi;