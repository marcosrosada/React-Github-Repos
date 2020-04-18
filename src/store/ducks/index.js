import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as repositories } from './repositories';

export default (history) =>
  combineReducers({
    auth,
    repositories,
    toastr,
    router: connectRouter(history),
  });
