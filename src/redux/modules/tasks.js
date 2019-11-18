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
export const newActiveTask = (payload) => ({ type: NEW_ACTIVE_TASK, payload })

// reducers
const initialState = {
  list: [],
  activeTask: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADED: {
      const list = state.list.concat(action.payload)
      return Object.assign({}, state, {
        list,
        activeTask: list[Math.floor(Math.random() * Math.floor(list.length))]
      })
    }
    case NEW_ACTIVE_TASK: {
      const activeTask = state.list[Math.floor(Math.random() * Math.floor(state.list.length))]
      return Object.assign({}, state, {
        activeTask
      })
    }
    default:
      return state
  }
}

export default reducer
