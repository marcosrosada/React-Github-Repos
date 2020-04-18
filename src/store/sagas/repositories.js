import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import ReposActions from '../ducks/Repos';

export function* getRepos({ user }) {
  const response = yield call(api.get, `?q=${user}&page=1&per_page=2`);

  yield put(ReposActions.getReposSuccess(response.data));
}
