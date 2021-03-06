import { put, delay } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import AuthActions from '../ducks/auth';
import LoadingActions from '../ducks/loading';

export function* signIn({ email, password }) {
  try {
    // const response = yield call(api.post, "login", { email, password });
    yield put(LoadingActions.openLoading());
    yield delay(2000);

    const response = {
      data:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNvc2Zyb3NhZGFAZ21haWwuY29tIiwiaWF0IjoxNTgwMjA1NTcyLCJleHAiOjE1ODAyMDkxNzIsInN1YiI6IjIifQ.PEZo1cd2qkINwuMOMNiyWIBPblQgnJUOj8FV4GVLZ0c',
    };

    sessionStorage.setItem('@Celfocus:token', response.data);
    yield put(AuthActions.signInSuccess(response.data));
    yield put(push('/'));

    yield put(LoadingActions.closeLoading());
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Error',
        message: 'Check your e-mail or password!',
      })
    );
  }
}

export function* signOut() {
  yield put(push('/signin'));
}
