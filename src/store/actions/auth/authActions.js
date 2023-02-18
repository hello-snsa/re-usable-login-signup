import { all, call, put,select,takeEvery } from 'redux-saga/effects';
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT,SET_LOGIN,REFRESH_TOKEN,REFRESH_TOKEN_SUCCESS} from '../index.js';

import api from '../../../api/api';
import { watchLogin } from '../../sagas/auth/authSagas.js';

export const setLogin = (email, password) => ({
  type: SET_LOGIN,
  email,
  password,
});

export const loginSuccess = (accessToken, refreshToken) => ({
  type: LOGIN_SUCCESS,
  accessToken,
  refreshToken,
});

export const refreshTokenSuccess = (accessToken) => ({
  type: REFRESH_TOKEN_SUCCESS,
  accessToken,
});

export const logout = () => ({
  type: LOGOUT,
});

export function* loginSaga(action) {
  try {
    const response = yield call(api.post, '/login', {
      email: action.email,
      password: action.password,
    });
    const { accessToken, refreshToken } = response.data;
    console.log("accessToken",accessToken);
    console.log("refreshToken",refreshToken);
    yield put(loginSuccess(accessToken, refreshToken));
  } catch (error) {
    console.log(error);
  }
}

export function* refreshTokenSaga() {
  try {
    const { refreshToken } = yield select((state) => state.auth);
    const response = yield call(api.post,'/auth/refresh-token', { refreshToken });
    const { accessToken } = response.data;
    yield put(refreshTokenSuccess(accessToken));
    } catch (error) {
    // handle error
    console.log("error at authAction.js",error);
    }
    }

    export function* watchRefreshToken() {
      yield takeEvery(REFRESH_TOKEN, refreshTokenSaga);
      }
      
      export function* authSaga() {
      yield all([watchLogin(), watchRefreshToken()]);
      }


//login?email=test@test.com&password=12345678
