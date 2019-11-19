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
    list: state.tasks.list,
    activeTaskId: state.tasks.activeTaskId
  }
}

const Task = ({ list, activeTaskId }) => (
  <Container>
    <>
      {
        list && activeTaskId
          ? <>
            <h4>{list[activeTaskId].title}</h4>
            <p>{list[activeTaskId].description}</p>
          </>
          : <h4>No tasks!</h4>
      }
    </>
  </Container>
)

export default connect(mapStateToProps)(Task)
