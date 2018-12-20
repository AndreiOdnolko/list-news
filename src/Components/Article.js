import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { title } = this.props.article;
    const { isOpen } = this.state;
    return (
      <>
        <h3>{title}</h3>
        <button onClick={this.handleClick}>
          {!isOpen ? "open" : "close"}
        </button>
        {this.getBody()}
      </>
    )
  }

  getBody() {
    const { text, comments } = this.props.article;
    const { isOpen } = this.state;
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

export default Article;