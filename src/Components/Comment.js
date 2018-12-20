import React from 'react';
import PropTypes from 'prop-types';

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
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comments;