import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentWillReceiveProps(nextProps) {
    console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
  }

  componentWillMount() {
    console.log('---', 'mounting')
  }
  
  render() {
    const { title } = this.props.article;
    const { isOpen, toggleOpen } = this.props;
    return (
      <div ref = { this.setContainerRef }>
        <h3>{title}</h3>
        <button onClick={toggleOpen}>
          {!isOpen ? "open" : "close"}
        </button>
        {this.getBody()}
      </div>
    )
  }

  setContainerRef = ref => {
    this.container = ref;
    console.log('---', ref);
  }

  componentDidMount() {
    console.log('---', 'mounted')
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

export default Article;