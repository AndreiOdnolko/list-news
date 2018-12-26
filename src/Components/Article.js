import React, { PureComponent } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticle } from '../AC';

import '../article.css';
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
    return (
      <div ref = { this.setContainerRef }>
        <h3>{title}</h3>
        <button onClick={toggleOpen}>
          {!isOpen ? "open" : "close"}
        </button>
        <button onClick={this.handleDelete}>
          delete me
        </button>
        <ReactCSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props;
    deleteArticle(article.id)
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

export default connect(null, {deleteArticle})(Article);