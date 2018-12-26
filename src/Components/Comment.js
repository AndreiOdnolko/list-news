import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Comments = (props) => {  
  const { user, text } = props;

  return (
    <>
      <h3>{user}</h3>
      <span>{text}</span>
    </>
  )
}

Comments.propTypes = {
  id: PropTypes.string.isRequired,
  // from connect
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default connect(({comments}, ownProps) => {  
  return comments.find(comment => comment.id === ownProps.id)
})(Comments); 