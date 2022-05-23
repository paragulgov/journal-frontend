import { Nullable } from '../../../base/types/BaseTypes';

export interface IUserModel {
  id: number;
  username: string;
  email: Nullable<string>;
  role: UserRole;
}

type UserRole = 'user' | 'moderator' | 'admin'
