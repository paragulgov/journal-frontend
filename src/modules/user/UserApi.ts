import { instance } from '../../axios/instance';
import { IUserModel } from './types/UserTypes';

const UserApi = {
  getUserInfo() {
    return instance.get<IUserModel>('/auth/me');
  },
};

export default UserApi;