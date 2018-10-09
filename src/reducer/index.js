import { combineReducers } from "redux";

const initialMessageState = [
  {
    id: 1,
    button: "Whats up?"
  },
  {
    id: 2,
    button: "Who?"
  },
  {
    id: 3,
    button: "When?"
  },
  {
    id: 4,
    button: "..."
  },
];

const MessageState = [
  {
    id: 1,
    question: "Whats up?",
    reply: "A levels, a few programming projects such as this one, and chilling when I can"
  },
  {
    id: 2,
    question: "Who are you?",
    reply: "Just someone with too many things on his mind"
  },
  {
    id: 3,
    question: "When did you start programming",
    reply: "Consistantly in July 2018, but I've done it for a long while"
  },
  {
    id: 4,
    question: "Whats your story?",
    reply: "Just getting started, wait til the end to see"
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

function ContactReducer(state = null, action) {
  switch(action.type) {
    case "CONTACT": {
      return true
    }
    default: return state;
  }
}

const rootReducer = combineReducers({
  buttons: ButtonReducer,
  Messages: MessageReducer,
  Menu: MenuReducer,
  ContactForm: ContactReducer,
})

export default rootReducer;
