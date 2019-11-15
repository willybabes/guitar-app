// constants
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DATA_LOADED = 'DATA_LOADED'

// reducers
const initialState = {
  articles: [],
  remoteArticles: []
}

export default function reducer (state = initialState, action) {
  console.log(state.remoteArticles)
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }
  return state
}

// actions
export function addArticle (payload) {
  return { type: ADD_ARTICLE, payload }
}

export function getData () {
  return function (dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json })
      })
  }
}
