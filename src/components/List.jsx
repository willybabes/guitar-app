import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledList = styled.ul`
  // background: red;
`

const StyledListItem = styled.li`
  ${({ completed }) => completed && `
    text-decoration: line-through;
  `}
`

const mapStateToProps = state => {
  return { list: state.tasks.list }
}

const ConnectedList = ({ list }) => (
  <StyledList>
    {Object.keys(list).map((item) => (
      <StyledListItem
        key={`tasklist_${item}`}
        completed={list[item].completed}
      >
        {list[item].title}
      </StyledListItem>
    ))}
  </StyledList>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List
