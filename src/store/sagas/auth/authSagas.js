import { takeEvery } from 'redux-saga/effects';
import { SET_LOGIN } from '../../actions';
import { loginSaga } from '../../actions/auth/authActions';

export function* watchLogin() {
  yield takeEvery(SET_LOGIN, loginSaga);
}
