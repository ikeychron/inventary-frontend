import { AUTHENTICATION, SET_USER, LOGOUT } from "../actions/userActions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: payload.authenticated,
        email: payload.email,
      };

    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload.data,
        },
      };

    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    }
    default:
      return state;
  }
};
