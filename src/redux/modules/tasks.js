import data from '../../data'

// Action constants
export const DATA_LOADED = 'DATA_LOADED'
export const API_ERRORED = 'API_ERRORED'
export const NEW_ACTIVE_TASK = 'NEW_ACTIVE_TASK'
export const ADD_TASK = 'ADD_TASK'

// Action creators
export function getData () {
  return function (dispatch) {
    dispatch({ type: DATA_LOADED, payload: data })
  }
}

// Action creators
export const newActiveTask = payload => ({ type: NEW_ACTIVE_TASK, payload })
export const addTask = payload => ({ type: ADD_TASK, payload })

// reducers
const initialState = {
  list: {},
  activeTask: null
}

const randomArrayEntry = max => Math.floor(Math.random() * Math.floor(max))

const createHash = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

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
    case ADD_TASK: {
      const newTask = {
        id: createHash(),
        ...action.payload,
        completed: false
      }
      return Object.assign({}, state, {
        list: { ...state.list, [newTask.id]: newTask }
      })
    }
    default:
      return state
  }
}

export default reducer
