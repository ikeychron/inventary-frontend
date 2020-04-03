import { OPEN_SIDEBAR } from "../actions/layoutActions";

const initialState = {
  openSidebar: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        openSidebar: !state.openSidebar,
      };
    default:
      return state;
  }
};
