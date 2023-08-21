import { combineReducers } from 'redux';

import general from './general/general.reducer.ts';
import ReducerCount, { AppState } from './counter/counter.reducer.ts';
import ReducerStringer, { AppStateString } from './name/name.reducer.ts';
import ReducerRikmorty, { initialStateRikMorty } from './rikmorty/rikmorty.reducer.ts';
general.reducer

export const rootReducer = combineReducers({
  general: general.reducer,
  number: ReducerCount,
  stringer: ReducerStringer,
  rikmorty: ReducerRikmorty
});

export interface RootState {
  general: typeof general.initialState
  number: AppState,
  stringer: AppStateString,
  rikmorty: initialStateRikMorty
}