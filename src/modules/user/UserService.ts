import UserApi from './UserApi';

export default class UserService {
  getUserInfo = async () => {
    const res = await UserApi.getUserInfo();
    return res.data;
  };
}
