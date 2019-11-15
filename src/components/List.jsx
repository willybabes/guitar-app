import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => {
  return { articles: state.articles.articles }
}

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map((el, index) => (
      <li key={`article_${index}`}>{el}</li>
    ))}
  </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List

ConnectedList.propTypes = {
  articles: PropTypes.array
}
