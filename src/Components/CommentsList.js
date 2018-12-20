import React, { Component } from 'react';
import Comment from './Comment';
class CommentsList extends Component {
  static defaultProps = {
    comments: []
  }

  state = {
    isOpen: false
  }

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>
          {!isOpen ? "Show Comments" : "Hide Comments"}
        </button>
        {this.getBody()}
      </>
    )
  }

  getBody() {
    const { comments } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) return null
    if (!comments.length) return <p>No comments yet</p>

    return (
      <ul>
        {comments.map(comment => <li key={comment.id}><Comment {...comment} /></li>)}
      </ul>
    )
  }
}

export default CommentsList;