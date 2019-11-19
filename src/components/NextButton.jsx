import React from 'react'
import { connect } from 'react-redux'
import { newActiveTask } from '../redux/modules/tasks'

function mapDispatchToProps (dispatch) {
  return {
    newActiveTask: activeTaskId => dispatch(newActiveTask(activeTaskId))
  }
}

const mapStateToProps = state => {
  return {
    activeTaskId: state.tasks.activeTaskId
  }
}

const ConnectedNextButton = ({ newActiveTask, activeTaskId }) => (
  <>
    <button
      onClick={() => newActiveTask(activeTaskId)}
    >
      Next ({activeTaskId})
    </button>
  </>
)

const Button = connect(
  mapStateToProps,
  mapDispatchToProps)(ConnectedNextButton)

export default Button
