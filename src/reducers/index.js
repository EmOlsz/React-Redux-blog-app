import { combineReducers } from 'redux';
import postIndex from './reducer_posts';

const rootReducer = combineReducers({
    posts: postIndex
});

export default rootReducer;
