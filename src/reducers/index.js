import { combineReducers } from 'redux';
//combineReducersがreducerを結合する関数
import count from './count';

export default combineReducers({ count });
