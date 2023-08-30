import { combineReducers } from 'redux';

import General from './general/general.reducer.ts';
import Blog from './blog/blog.reducer.ts';
import ReducerCount, { AppState } from './counter/counter.reducer.ts';
import ReducerStringer, { AppStateString } from './name/name.reducer.ts';
import ReducerRikmorty, { initialStateRikMorty } from './rikmorty/rikmorty.reducer.ts';

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