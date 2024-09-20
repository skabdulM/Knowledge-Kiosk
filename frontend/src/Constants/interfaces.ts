export interface User {
  email: string;
  password: string;
}
export interface UserSignUp {
  email: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string | null;
    lastName: string;
  };
  phone?: string | null;
}
