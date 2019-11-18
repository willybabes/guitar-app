import React from 'react'
import { connect } from 'react-redux'
import { newActiveTask } from '../redux/modules/tasks'

function mapDispatchToProps (dispatch) {
  return {
    newActiveTask: () => dispatch(newActiveTask())
  }
}

const ConnectedNextButton = ({ newActiveTask }) => (
  <>
    <button
      onClick={newActiveTask}
    >
      Next
    </button>
  </>
)

const Button = connect(
  null,
  mapDispatchToProps)(ConnectedNextButton)

export default Button
