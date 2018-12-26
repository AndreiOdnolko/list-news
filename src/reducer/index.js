import { combineReducers } from 'redux';
import count from './counter'
import articles from './articles';
import filter from './filter';

export default combineReducers({
  count,
  articles,
  filter
})

