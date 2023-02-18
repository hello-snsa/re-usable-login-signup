import { call, put, delay } from 'redux-saga/effects';
import { refreshAccessToken } from '../api/authApi';
import { loginSuccess } from '../actions/authActions';

export function* refreshTokenSaga() {
  while (true) {
    yield delay(1000 * 60); // Wait for 1 minute
    try {
      const response = yield call(refreshAccessToken);
      const { accessToken, refreshToken } = response.data;
      yield put(loginSuccess(accessToken, refreshToken));
    } catch (error) {
      console.log(error);
    }
  }
}
