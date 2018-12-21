import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  // shouldComponentUpdate(nextProps, nextsState) {
  //   return nextProps.isOpen !== this.props.isOpen
  // }
  
  render() {
    const { title } = this.props.article;
    const { isOpen, toggleOpen } = this.props;
    console.log('---', 'update article');
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