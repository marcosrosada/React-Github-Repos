import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getReposRequest: ['repos'],
  getReposSuccess: ['data'],
  openReposModal: null,
  closeReposModal: null,
});

export const ReposTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  ReposModalOpen: false,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });

export const openModal = (state) => state.merge({ ReposModalOpen: true });

export const closeModal = (state) => state.merge({ ReposModalOpen: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REPOS_SUCCESS]: success,
  [Types.OPEN_REPOS_MODAL]: openModal,
  [Types.CLOSE_REPOS_MODAL]: closeModal,
});
