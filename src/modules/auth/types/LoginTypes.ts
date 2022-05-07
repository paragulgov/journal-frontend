import { IUserModel } from '../../user/types/UserTypes';

export interface ILoginValues {
  username: string;
  password: string;
}

export interface ILoginDto {
  username: string;
  password: string;
}

export interface ILoginModel {
  userInfo: IUserModel;
  token: string;
}