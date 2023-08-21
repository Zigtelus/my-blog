export interface initialStateRikMorty {
  characters: [];
}

// Определение начального состояния
const initialState: initialStateRikMorty = {
  characters: []
};

// Определение редьюсера
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PUT_DATA':
      return { ...state, characters: action.payload.results };
    default:
      return state;
  }
};

export default reducer;
