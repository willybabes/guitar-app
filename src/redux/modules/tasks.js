import data from '../../data'

// Action constants
export const DATA_LOADED = 'DATA_LOADED'
export const API_ERRORED = 'API_ERRORED'

// Action creators
export function getData () {
  return function (dispatch) {
    dispatch({ type: DATA_LOADED, payload: data })
  }
}

// reducers
const initialState = {
  list: [],
  activeTask: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADED: {
      return Object.assign({}, state, {
        list: state.list.concat(action.payload),
        activeTask: Math.floor(Math.random() * Math.floor(action.payload.length))
      })
    }
    default:
      return state
  }
}

export default reducer
