// constants
export const ADD_ARTICLE = 'ADD_ARTICLE'

// reducers
const initialState = {
  articles: []
}

export default function reducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  return state
}

// actions
export function addArticle (payload) {
  return { type: ADD_ARTICLE, payload }
}
