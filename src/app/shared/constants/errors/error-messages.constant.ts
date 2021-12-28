export const ERRORS = {
  internal: 'internal',
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
  tooManyRequests: 'auth/too-many-requests',
  emailNotVerified: 'auth/email-not-verified',
  emailDoesNotExist: 'auth/email-does-not-exist',
  passwordsMismatch: 'auth/password-mismatch',
  invalidActionCode: 'auth/invalid-action-code',
  expiredActionCode: 'auth/expired-action-code',
  userStatusActive: 'user-status/active',
  emailVerification: 'verify-email/failed'
};

export const ERROR_MESSAGES_MAIN: Record<string, string> = {
  [ERRORS.userNotFound]: 'Incorrect email address or password. Please check your credentials and try again.',
  [ERRORS.wrongPassword]: 'Incorrect email address or password. Please check your credentials and try again.',
  [ERRORS.tooManyRequests]: `Access to this account has been temporarily disabled due to many failed login attempts.
    You can immediately restore it by resetting your password or you can try again later.`,
  [ERRORS.emailNotVerified]: 'Email not verified. Please check your email and verify your account.',
  [ERRORS.emailDoesNotExist]: 'Email does not exist',
  [ERRORS.passwordsMismatch]: 'Password and Confirm Password do not match',
  [ERRORS.invalidActionCode]: 'Your link is either invalid or has expired.',
  [ERRORS.expiredActionCode]: 'Your link is either invalid or has expired.',
  [ERRORS.userStatusActive]: 'User Status',
  [ERRORS.emailVerification]: 'There was an error during the mail verification process. Please try again.'
};

export const ERROR_MESSAGES_SUB: Record<string, string> = {
  [ERRORS.emailDoesNotExist]: 'Please check that you have typed your email or username correctly.',
  [ERRORS.internal]: 'We encountered a technical issue while trying to resolve your request. Please try again.',
  [ERRORS.invalidActionCode]: 'Either the token has expired or the link has already been used. Please try again.',
  [ERRORS.expiredActionCode]: 'Either the token has expired or the link has already been used. Please try again.',
  [ERRORS.userStatusActive]: 'User is already registered. Please sign in instead',
  [ERRORS.userNotFound]: 'Invalid Credentials',
  [ERRORS.wrongPassword]: 'Invalid Credentials'
};
