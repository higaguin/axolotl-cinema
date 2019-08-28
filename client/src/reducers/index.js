import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchReducer from './searchReducer';

export default combineReducers({
    form: formReducer,
    search: searchReducer
}); 