export interface IUserModel {
  id: number;
  username: string;
  role: UserRole;
}

type UserRole = 'user' | 'moderator' | 'admin'
