import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../redux/modules/articles'

function mapDispatchToProps (dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

const ConnectedForm = ({ addArticle }) => {
  const [title, setTitle] = useState('')
  const handleChange = e => setTitle(e.currentTarget.value)
  const handleSubmit = e => {
    e.preventDefault()
    addArticle(title)
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}

const Form = connect(
  null,
  mapDispatchToProps)(ConnectedForm)

export default Form
