export type UserResponse = {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
};

export type AccessTokenResponse = {
  access_token: string;
  code: string;
  token_type: string;
};
