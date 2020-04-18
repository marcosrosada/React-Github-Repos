import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import ReposActions from '../ducks/repositories';

export function* getReposRequest({ user }) {
  const response = yield call(
    api.get,
    `search/repositories?q=${user}&page=1&per_page=2`
  );

  yield put(ReposActions.getReposSuccess(response.data));
}
