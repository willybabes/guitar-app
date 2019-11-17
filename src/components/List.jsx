import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { list: state.tasks.list }
}

const ConnectedList = ({ list }) => (
  <ul>
    {list.map((item, index) => (
      <li key={`tasklist_${index}`}>{item.title}</li>
    ))}
  </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List
