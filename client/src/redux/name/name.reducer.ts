export interface AppStateString {
  string: string;
}

// Определение начального состояния
const initialState: AppStateString = {
  string: '',
};

// Определение редьюсера
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'HERO_NAME':
      return { ...state, string: action.payload };
    default:
      return state;
  }
};

export default reducer;
