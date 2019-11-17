import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    task: state.tasks.activeTask
  }
}

const Task = ({ task }) => (
  <>
    {
      task &&
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </>
    }
  </>
)

export default connect(mapStateToProps)(Task)
