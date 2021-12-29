export const PATHURL = {
  // SIGN UP PATH
  signUp: 'sign-up',

  // LOGIN PATH
  login: 'login',

  // TABS
  tabs: 'tabs',
  account: 'account',
  friends: 'friends',
  scan: 'scan'
};

export const ROUTEURL = {
  signUp: `/${PATHURL.signUp}`,
  login: `/${PATHURL.login}`,
  tabs: `${PATHURL.tabs}`,
  account: `/${PATHURL.tabs}/${PATHURL.account}`,
  friends: `/${PATHURL.tabs}/${PATHURL.friends}`,
  scan: `/${PATHURL.tabs}/${PATHURL.scan}`,
};
