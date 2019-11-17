import { takeEvery, call, put } from 'redux-saga/effects'

// Action constants
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DATA_LOADED = 'DATA_LOADED'
export const DATA_REQUESTED = 'DATA_REQUESTED'
export const API_ERRORED = 'API_ERRORED'

// Action creators
export const addArticle = (payload) => ({ type: ADD_ARTICLE, payload })
export const getData = () => ({ type: DATA_REQUESTED })

// Sagas
export function * watcherSaga () {
  yield takeEvery(DATA_REQUESTED, workerSaga)
}

function * workerSaga () {
  try {
    const payload = yield call(getSagaData)
    yield put({ type: DATA_LOADED, payload })
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e })
  }
}

function getSagaData () {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json()
  )
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
