import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  openLoading: null,
  closeLoading: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loadingOpen: false,
});

/* Reducers */

export const openLoading = (state) => state.merge({ loadingOpen: true });

export const closeLoading = (state) => state.merge({ loadingOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_LOADING]: openLoading,
  [Types.CLOSE_LOADING]: closeLoading,
});
