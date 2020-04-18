import { all, takeLatest } from 'redux-saga/effects';

import { signIn, signOut, signUp } from './auth';
import { AuthTypes } from '../ducks/auth';

import { getReposRequest } from './repositories';
import { ReposTypes } from '../ducks/repositories';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(ReposTypes.GET_REPOS_REQUEST, getReposRequest),
  ]);
}
