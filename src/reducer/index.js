import { combineReducers } from 'redux';
import MessageReducer from './reducer-message';


const rootReducer = combineReducers({
  MessageStore: MessageReducer,
});

export default rootReducer;