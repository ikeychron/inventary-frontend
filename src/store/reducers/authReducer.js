import { AUTHENTICATION, SET_USER } from "../actions/userActions";

const initialState = {
  isAuthenticated: {
    token: "",
    isAuth: false,
  },
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: { token: payload.token, isAuth: payload.isAuth },
      };

    case SET_USER:
      return {
        ...state,
        user: {
          ...payload,
        },
      };

    default:
      return state;
  }
};
