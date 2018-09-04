import { combineReducers } from 'redux';


const initialMessageState = [
  {
    id:1,
    button: "Whats up?",
  },
  {
    id: 2,
    button: "Hot pockets",
  },
  {
    id: 3,
    button: "Button 3",
  },
  {
    id: 4,
    button: "Meh",
  }
];

const MessageState = [
  {
    id:1,
    question: "This is a question",
    reply: "This is a reply"
  },
  {
    id:2,
    question: "Question 2",
    reply: "Reply 2"
  },
  {
    id:3,
    question: "Question 3",
    reply: "Reply 3"
  },
  {
    id:4,
    question: "Question 4",
    reply: "Reply 4"
  }
]

function ButtonReducer(state = initialMessageState, action) {
  switch(action.type) {
    case "BUTTON_CLICKED": {
      return state.filter(message => message.id !== action.id);
    }
    default: return state;
  }
}

function returnMessage(state = null, action) {
  const newestMessage = MessageState.find( message => message.id === action.id);
  console.log(action.id)
  if (action.id !== undefined) {
    return newestMessage;
  }
  else {
    return state;
  }
}
//right now action.id is undefined because it doesnt have a value

function MessageReducer(state = MessageState, action) {
  switch(action.type) {
    case "BUTTON_CLICKED": {
      return MessageState;
        /* returnMessage */

    }
    default : return state;
  }
}



const rootReducer = combineReducers({
  buttons: ButtonReducer,
  messages: MessageReducer,
  returnMessage: returnMessage
});

export default rootReducer;