import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './modules/reducer'
// import { forbiddenWordsMiddleware } from './middleware'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './modules/articles'

const initialiseSagaMiddleware = createSagaMiddleware()
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(initialiseSagaMiddleware)
  )
)
initialiseSagaMiddleware.run(watcherSaga)

export default store
