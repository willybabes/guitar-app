import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../redux/modules/articles'
import PropTypes from 'prop-types'

export class Post extends Component {
  componentDidMount () {
    this.props.getData()
  }

  render () {
    const { articles } = this.props
    return (
      <ul>
        {articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  console.log(state.articles.remoteArticles)
  return {
    articles: state.articles.remoteArticles.slice(0, 10)
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post)

Post.propTypes = {
  articles: PropTypes.array,
  getData: PropTypes.func
}
