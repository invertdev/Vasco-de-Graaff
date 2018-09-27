import { combineReducers } from "redux";

const initialMessageState = [
  {
    id: 1,
    button: "Whats up?"
  },
  {
    id: 2,
    button: "Who are you?"
  },
  {
    id: 3,
    button: "When did you start programming?"
  },
  {
    id: 4,
    button: "Meh"
  }
];

const MessageState = [
  {
    id: 1,
    question: "Whats up?",
    reply: "School n stuff"
  },
  {
    id: 2,
    question: "Who are you?",
    reply: "Just some random kiddo in the middle of nowhere"
  },
  {
    id: 3,
    question: "When did you start programming",
    reply: "Consistantly in July 2018, but I've done it for a while already"
  },
  {
    id: 4,
    question: "Whats your story?",
    reply: "404 not found"
  }
];

function ButtonReducer(state = initialMessageState, action) {
  switch (action.type) {
    case "BUTTON_CLICKED": {
      return state.filter(message => message.id !== action.id);
    }
    default:
      return state;
  }
}

function MessageReducer(state = [], action) {
  switch (action.type) {
    case "BUTTON_CLICKED": {
      const newestMessage = MessageState.find(message => message.id === action.id);
      console.log(newestMessage);
      console.log(action);
      //const {message} = action;
      return state.concat(newestMessage);
      //reducer should determain a new state based on (state, action) arguments
    }
    default: return state;
  }
}

function MenuReducer(state = false, action) {
  switch (action.type) {
    case "MENU_SELECTED": {
      if(state === false){
        return true
      }else if(state === true){
        return false
      }
      break
    }
    default: return state;
  }
}

const rootReducer = combineReducers({
  buttons: ButtonReducer,
  Messages: MessageReducer,
  Menu: MenuReducer
})

export default rootReducer;
