import { IRegisterDto, IRegisterValues } from './types/RegisterTypes';
import AuthApi from './AuthApi';
import { ILoginDto, ILoginValues } from './types/LoginTypes';

export default class AuthService {
  register = async (values: IRegisterValues) => {
    const dto: IRegisterDto = { ...values };

    const res = await AuthApi.register(dto);
    return res.data;
  };

  login = async (values: ILoginValues) => {
    const dto: ILoginDto = { ...values };

    const res = await AuthApi.login(dto);
    return res.data;
  };
}
