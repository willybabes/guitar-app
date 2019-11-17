// Action constants
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DATA_LOADED = 'DATA_LOADED'
export const DATA_REQUESTED = 'DATA_REQUESTED'
export const API_ERRORED = 'API_ERRORED'

// Action creators
export const addArticle = (payload) => ({ type: ADD_ARTICLE, payload })

export function getData () {
  return function (dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json })
      })
  }
}

// reducers
const initialState = {
  articles: [],
  remoteArticles: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
    }
    case DATA_LOADED: {
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      })
    }
    default:
      return state
  }
}

export default reducer
