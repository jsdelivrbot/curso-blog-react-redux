import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import ReducerPosts from './reducer_posts';

const rootReducer = combineReducers({
  posts: ReducerPosts,
  form: FormReducer
});

export default rootReducer;
