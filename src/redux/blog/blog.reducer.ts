import { Article } from "./blog.types"

interface InitialState {
  article: Article

}

const initialState: InitialState = {
  article: {
    title: 'title',
    description: 'description'
  }
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'article':
      return {
        ...state,
        article: action.payload
      }
    default:
      return { ...state }
  }
}

export default { reducer, initialState }