import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getReposRequest: ['user', 'currentPage'],
  getReposSuccess: ['data'],
  openModal: null,
  closeModal: null,
});

export const ReposTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  reposModalOpen: false,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });

export const openModal = (state) => state.merge({ reposModalOpen: true });

export const closeModal = (state) => state.merge({ reposModalOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REPOS_SUCCESS]: success,
  [Types.OPEN_MODAL]: openModal,
  [Types.CLOSE_MODAL]: closeModal,
});
