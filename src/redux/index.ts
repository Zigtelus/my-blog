import { combineReducers } from 'redux';

import General from './general/general.reducer.ts';
import ReducerCount, { AppState } from './counter/counter.reducer.ts';
import ReducerStringer, { AppStateString } from './name/name.reducer.ts';
import ReducerRikmorty, { initialStateRikMorty } from './rikmorty/rikmorty.reducer.ts';

export const rootReducer = combineReducers({
  general: General.reducer,
  number: ReducerCount,
  stringer: ReducerStringer,
  rikmorty: ReducerRikmorty
});

export interface RootState {
  general: typeof General.initialState,
  number: AppState,
  stringer: AppStateString,
  rikmorty: initialStateRikMorty
}