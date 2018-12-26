import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {commentSelectorFactory} from '../selectors';

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

const mapStatetoProps = () => {
  const commentSelector = commentSelectorFactory();
  return (state, ownProps) => {  
      return commentSelector(state, ownProps);
    }  
} 
export default connect(mapStatetoProps)(Comments); 