import { IRegisterDto, IRegisterValues } from './types/RegisterTypes';
import AuthApi from './AuthApi';

export default class AuthService {
  register = async (values: IRegisterValues) => {
    const dto: IRegisterDto = { ...values };

    const res = await AuthApi.register(dto);
    return res.data;
  };
}
