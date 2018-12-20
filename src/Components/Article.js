import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }
  
  render() {
    const { title } = this.props.article;
    const { isOpen, toggleOpen } = this.props;
    return (
      <>
        <h3>{title}</h3>
        <button onClick={toggleOpen}>
          {!isOpen ? "open" : "close"}
        </button>
        {this.getBody()}
      </>
    )
  }

  getBody() {
    const { text, comments } = this.props.article;
    const { isOpen } = this.props;
    if (!isOpen) {
      return null
    } else {
      return (
        <>
          <section>{text}</section>
          <CommentsList comments = {comments}/>
        </>
      )
    }
  }
}

export default toggleOpen(Article);