import { Nullable } from '../../../types/types';

export interface IUserModel {
  id: number;
  username: string;
  email: Nullable<string>;
  role: UserRole;
}

type UserRole = 'user' | 'moderator' | 'admin'
