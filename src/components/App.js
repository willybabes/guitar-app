import React, { Component } from 'react'
import Task from './Task'
import List from './List'
import { getData } from '../redux/modules/tasks'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  componentDidMount () {
    this.props.getData()
  }

  render () {
    return (
      <>
        <div>
          <h2>Task</h2>
          <Task />
        </div>
        <div>
          <h2>List</h2>
          <List />
        </div>
      </>
    )
  }
}

export default connect(
  null,
  { getData }
)(App)
