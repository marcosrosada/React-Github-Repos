import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signOut: null,
  openLoading: null,
  closeLoading: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!sessionStorage.getItem('@Celfocus:token'),
  token: sessionStorage.getItem('@Celfocus:token') || null,
  loadingOpen: false,
});

/* Reducers */

export const success = (state, { token }) =>
  state.merge({ signedIn: true, token });

export const logout = (state) => state.merge({ signedIn: false, token: null });

export const openLoading = (state) => state.merge({ loadingOpen: true });

export const closeLoading = (state) => state.merge({ loadingOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.OPEN_LOADING]: openLoading,
  [Types.CLOSE_LOADING]: closeLoading,
});
