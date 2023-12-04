export interface User {
  email?: string;
  password?: string;
  rePassword?: string;
  accessToken?: string;
  refreshToken?: string;
  activeState?: boolean;
  signupState?: LoadType;
  message?: string;
  loadState?: LoadType;
}

export enum LoadType {
  pending,
  idle,
  error,
  success,
}
