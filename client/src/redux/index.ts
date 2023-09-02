import { combineReducers } from 'redux';

import General from './general/general.reducer';
import Blog from './blog/blog.reducer';
import ReducerCount, { AppState } from './counter/counter.reducer';
import ReducerStringer, { AppStateString } from './name/name.reducer';
import ReducerRikmorty, { initialStateRikMorty } from './rikmorty/rikmorty.reducer';

export const rootReducer = combineReducers({
  general: General.reducer,
  blog: Blog.reducer,
  number: ReducerCount,
  stringer: ReducerStringer,
  rikmorty: ReducerRikmorty
});

export interface RootState {
  general: typeof General.initialState,
  blog: typeof Blog.initialState,
  number: AppState,
  stringer: AppStateString,
  rikmorty: initialStateRikMorty
}