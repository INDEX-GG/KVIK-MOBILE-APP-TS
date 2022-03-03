export interface SignInReq {
  phone: string;
  password: string;
}

export interface SignInRes {
  isset?: boolean;
  idUser?: number;
}
