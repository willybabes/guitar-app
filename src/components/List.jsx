import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledList = styled.ul`
  background: red
`

const mapStateToProps = state => {
  return { list: state.tasks.list }
}

const ConnectedList = ({ list }) => (
  <StyledList>
    {list.map((item, index) => (
      <li key={`tasklist_${index}`}>{item.title}</li>
    ))}
  </StyledList>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List
