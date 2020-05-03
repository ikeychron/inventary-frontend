export const AUTHENTICATION = "AUTHENTICATION";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export const setUserData = (data) => ({ payload: data, type: SET_USER });
export const setUserAuthentication = (authenticated, email) => ({
  payload: { authenticated, email },
  type: SET_USER,
});
