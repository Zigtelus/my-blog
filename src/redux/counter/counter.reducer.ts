export interface AppState {
  counter: number;
}

// Определение начального состояния
const initialState: AppState = {
  counter: 0
};

// Определение редьюсера
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default reducer;
