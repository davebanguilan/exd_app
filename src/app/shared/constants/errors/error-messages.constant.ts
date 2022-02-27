export const ERRORS = {
  internal: 'internal',
  login: 'login',
  signUp: 'sign-up',
  //Sign Up
  emailAlreadyExist: 'auth/email-already-in-use',
  invalidEmail: 'auth/invalid-email',
  operationNotAllowed: 'auth/operation-not-allowed',
  weakPassword: 'auth/weak-password',

  //Sign In
  userDisabled: 'auth/user-disabled',
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
  tooManyRequest: 'auth/too-many-requests',
};

export const ERROR_MESSAGES_MAIN: Record<string, string> = {
  [ERRORS.internal]: 'Error Encountered',
  [ERRORS.login]: 'Login Error',
  [ERRORS.signUp]: 'Sign Up Error',
  [ERRORS.emailAlreadyExist]: 'Invalid Email Address',
  [ERRORS.invalidEmail]: 'Invalid Email Address',
  [ERRORS.operationNotAllowed]: 'Account Disabled',
  [ERRORS.weakPassword]: 'Weak Password',
  [ERRORS.userDisabled]: 'Account Disabled',
  [ERRORS.userNotFound]: 'Account Not Found',
  [ERRORS.wrongPassword]: 'Invalid Credentials',
  [ERRORS.tooManyRequest]: 'Too Many Request',
};

export const ERROR_MESSAGES_SUB: Record<string, string> = {
  [ERRORS.internal]: 'We encountered a technical issue while trying to resolve your request. Please try again.',
  [ERRORS.emailAlreadyExist]: 'Email is already registered. Please user other email or login using that email.',
  [ERRORS.invalidEmail]: 'Please check that you have typed your email correctly.',
  [ERRORS.operationNotAllowed]: 'Your account is currently disabled. Please contact the admin to enable it again.',
  [ERRORS.weakPassword]: 'The password entered is weak. Please follow the format.',
  [ERRORS.userDisabled]: 'Your account is currently disabled. Please contact the admin to enable it again.',
  [ERRORS.userNotFound]: 'The credentials you entered is not registered. Please sign up.',
  [ERRORS.wrongPassword]: 'The email or password that you entered is invalid.',
  [ERRORS.tooManyRequest]: 'We temporarily disabled your account due to numerous request. Please wait to login again.',
};
