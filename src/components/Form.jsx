import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../redux/modules/tasks'
import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

function mapDispatchToProps (dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  }
}

const ConnectedForm = ({ addTask }) => {
  const [inputs, setInputs] = useState({
    title: '',
    description: ''
  })
  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    if (inputs.title && inputs.description) {
      addTask({
        title: inputs.title, description: inputs.description
      })
    }
  }
  const handleInputChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor='title'>Title</Form.Label>
        <Form.Control
          type='text'
          id='title'
          name='title'
          value={inputs.title}
          onChange={handleInputChange}
        />
        <Form.Label htmlFor='description'>Description</Form.Label>
        <Form.Control
          type='description'
          id='description'
          name='description'
          value={inputs.description}
          onChange={handleInputChange}
        />
        <Button type='submit'>Save</Button>
      </Form.Group>
    </Form>
  )
}

const StyledForm = connect(
  null,
  mapDispatchToProps)(ConnectedForm)

export default StyledForm

ConnectedForm.propTypes = {
  addTask: PropTypes.func
}
