import { Article } from "./blog.types"

interface InitialState {
  article: Article

}

const initialState: InitialState = {
  article: [
    {
      id: 1,
      title: 'title',
      description: 'description',
      cover: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      html: `<p class="sss">ssss </p> <style>p {background: black;color: white;}</style><script>const qq = document.querySelector('.sss');qq.addEventListener("click", () => {console.log("console.logaaa");});</script>`
    },
    {
      id: 2,
      title: 'title 2',
      description: 'description 2',
      cover: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      html: `<p class="sss">ssss </p> <style>p {background: black;color: white;}</style><script>const qq = document.querySelector('.sss');qq.addEventListener("click", () => {console.log("console.logaaa");});</script>`
    },
    {
      id: 3,
      title: 'title 3',
      description: 'description 3',
      cover: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      html: `<p class="sss">ssss </p> <style>p {background: black;color: white;}</style><script>const qq = document.querySelector('.sss');qq.addEventListener("click", () => {console.log("console.logaaa");});</script>`
    }
  ]
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