import data from '../../data'

// Action constants
export const DATA_LOADED = 'DATA_LOADED'
export const API_ERRORED = 'API_ERRORED'
export const NEW_ACTIVE_TASK = 'NEW_ACTIVE_TASK'

// Action creators
export function getData () {
  return function (dispatch) {
    dispatch({ type: DATA_LOADED, payload: data })
  }
}

// Action creators
export const newActiveTask = payload => ({ type: NEW_ACTIVE_TASK, payload })

// reducers
const initialState = {
  list: [],
  activeTask: null
}

const randomArrayEntry = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADED: {
      const list = action.payload
      const listAsArray = Object.keys(list)
      return Object.assign({}, state, {
        list,
        activeTaskId: list[listAsArray[randomArrayEntry(listAsArray.length)]].id
      })
    }
    case NEW_ACTIVE_TASK: {
      const list = Object.assign({}, state.list, {
        [action.payload]: Object.assign({}, state.list[action.payload], {
          completed: true
        })
      })
      const incomplete = Object.keys(list).filter(key => list[key].completed === false)
      return Object.assign({}, state, {
        list,
        activeTaskId: incomplete[randomArrayEntry(incomplete.length)]
      })
    }
    default:
      return state
  }
}

export default reducer
