export interface User {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  photoUrl?: string;
  fbUsername?: string;
  instagramUsername?: string;
  twitterUsername?: string;
  snapchatUsername?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SignInRequest {
  email?: string;
  password?: string;
}
