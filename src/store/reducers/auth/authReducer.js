import { LOGIN_SUCCESS,LOGOUT } from "../../actions";

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
