import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (accessToken, refreshToken) => ({
  type: LOGIN_SUCCESS,
  accessToken,
  refreshToken,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    axios.post('/api/auth/login', {
      email,
      password,
    })
      .then((response) => {
        const { accessToken, refreshToken } = response.data;
        dispatch(loginSuccess(accessToken, refreshToken));
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data.error));
      });
  };
};
