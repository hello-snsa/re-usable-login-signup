import { all } from 'redux-saga/effects';
import { watchLogin } from './auth/authSagas';

export default function* rootSaga() {
  yield all([watchLogin()]);
}
