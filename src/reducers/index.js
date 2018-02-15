import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import postIndex from './reducer_posts';

const rootReducer = combineReducers({
    posts: postIndex,
    form: formReducer
});

export default rootReducer;
