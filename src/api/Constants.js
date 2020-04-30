
// export const API_URL = 'http://localhost:5000';
// export const AUTH_URL = 'http://localhost:5000';
// export const API_CONSUMER = 'http://localhost:5000';

export const API_URL = 'http://nubeselite.training';
export const AUTH_URL = 'http://nubeselite.training';
export const API_CONSUMER = 'http://nubeselite.training';


export const APP_TOKEN = {
  set: ({ token, refreshToken, roleName, role_id, franchiseId, userName, userId, uid }) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('refresh_token', refreshToken);
    sessionStorage.setItem('role_name', roleName);
    sessionStorage.setItem('role_id', role_id);
    sessionStorage.setItem('user_name', userName);
    sessionStorage.setItem('uid', uid);
    
  },
  remove: () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('role_name');
    sessionStorage.removeItem('role_id');
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('uid');
  },
  get: () => ({
    token: sessionStorage.getItem('token'),
    refreshToken: sessionStorage.getItem('refresh_token'),
    roleName: sessionStorage.getItem('role_name'),
    role_id: sessionStorage.getItem('role_id'),
    userName: sessionStorage.getItem('user_name'),
    uid: sessionStorage.getItem('uid'),
  }),
  get notEmpty() {
    const cond1 = this.get().token !== null;
    const cond2 = this.get().token !== '';
    return cond1 && cond2;
  },
};
