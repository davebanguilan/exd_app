export const PATHURL = {
  // SIGN UP PATH
  signUp: 'sign-up',

  // LOGIN PATH
  login: 'login',

  // TABS
  tabs: 'tabs',
  account: 'account',
  connections: 'connections',
  scan: 'scan'
};

export const ROUTEURL = {
  signUp: `/${PATHURL.signUp}`,
  login: `/${PATHURL.login}`,
  tabs: `${PATHURL.tabs}`,
  account: `/${PATHURL.tabs}/${PATHURL.account}`,
  connections: `/${PATHURL.tabs}/${PATHURL.connections}`,
  scan: `/${PATHURL.tabs}/${PATHURL.scan}`,
};
