import { combineReducers } from 'redux'

import articles from './articles'
import tasks from './tasks'

export default combineReducers({
  articles,
  tasks
})
