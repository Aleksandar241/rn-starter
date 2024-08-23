export enum LoginForm {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export type Login = {
  [LoginForm.EMAIL]: string;
  [LoginForm.PASSWORD]: string;
};
