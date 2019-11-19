import React from 'react'
import { connect } from 'react-redux'
import { newActiveTask } from '../redux/modules/tasks'
import { Button } from 'react-bootstrap'

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
    <Button
      onClick={() => newActiveTask(activeTaskId)}
    >
      Next
    </Button>
  </>
)

const StyledButton = connect(
  mapStateToProps,
  mapDispatchToProps)(ConnectedNextButton)

export default StyledButton
