export interface User {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  photoUrl?: string;
  fbUsername?: string;
  instagramUsername?: string;
  twitterUsername?: string;
  snapchatUsername?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SignUpRequest extends User {
  confirmPassword?: string;
}

export interface SignInRequest {
  email?: string;
  password?: string;
}
