import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import ReposActions from '../ducks/repositories';
import LoadingActions from '../ducks/loading';

export function* getReposRequest({ user, currentPage = 1 }) {
  try {
    yield put(LoadingActions.openLoading());
    const response = yield call(
      api.get,
      `search/repositories?q=${user}&page=${currentPage}&per_page=6`
    );

    yield put(ReposActions.getReposSuccess(response.data));
    yield put(LoadingActions.closeLoading());
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'ERROR',
        message: 'Ops! Try again',
      })
    );
  }
}
