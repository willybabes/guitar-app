import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

function mapStateToProps (state) {
  return {
    task: state.tasks.activeTask
  }
}

const Task = ({ task }) => (
  <Container>
    {
      task &&
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </>
    }
  </Container>
)

export default connect(mapStateToProps)(Task)
