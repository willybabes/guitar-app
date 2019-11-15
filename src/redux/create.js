import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './modules/reducer'
import { forbiddenWordsMiddleware } from './middleware'
import thunk from 'redux-thunk'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(thunk, forbiddenWordsMiddleware)
  )
)

export default store
