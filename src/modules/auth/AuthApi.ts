import { instance } from '../../base/axios/instance';
import { IRegisterDto, IRegisterModel } from './types/RegisterTypes';

const AuthApi = {
  register(data: IRegisterDto) {
    return instance.post<IRegisterModel>('/auth/register', data);
  },
};

export default AuthApi;