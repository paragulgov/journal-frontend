import { IUserModel } from '../../user/types/UserTypes';

export interface IRegisterValues {
  username: string;
  password: string;
}

export interface IRegisterDto {
  username: string;
  password: string;
}

export interface IRegisterModel {
  userInfo: IUserModel;
  token: string;
}