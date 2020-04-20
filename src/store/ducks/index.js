import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as loading } from './loading';
import { reducer as repositories } from './repositories';

export default (history) =>
  combineReducers({
    auth,
    loading,
    repositories,
    toastr,
    router: connectRouter(history),
  });
