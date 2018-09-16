import { combineReducers } from "redux";

const initialMessageState = [
  {
    id: 1,
    button: "Whats up?"
  },
  {
    id: 2,
    button: "Hot pockets"
  },
  {
    id: 3,
    button: "Button 3"
  },
  {
    id: 4,
    button: "Meh"
  }
];

const MessageState = [
  {
    id: 1,
    question: "This is a question",
    reply: "This is a reply"
  },
  {
    id: 2,
    question: "Question 2",
    reply: "Reply 2"
  },
  {
    id: 3,
    question: "Question 3",
    reply: "Reply 3"
  },
  {
    id: 4,
    question: "Question 4",
    reply: "Reply 4"
  }
];

const messageDisplay = [];

function ButtonReducer(state = initialMessageState, action) {
  switch (action.type) {
    case "BUTTON_CLICKED": {
      return state.filter(message => message.id !== action.id);
    }
    default:
      return state;
  }
}

/*action.id
    ? {
        ...state,
        DisplayMessage: (state.DisplayMessage || []).concat(newestMessage)
    } : state
  );
  */

function returnMessage(state = null, action) {
  const newestMessage = MessageState.find(message => message.id === action.id);
  const messageDisplay = [];
  //checks current action.id (button click) and matches it to the message.id
  //need to add more logic to control the states and the view

  console.log(newestMessage);
  return()
}
/* function combineMessage(state = null, action) {
  const combineMessage = 
} */

function MessageReducer(state = MessageState, action) {
  switch (action.type) {
    case "BUTTON_CLICKED": {
      return MessageState;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  buttons: ButtonReducer,
  messages: MessageReducer,
  returnMessage: returnMessage
});

export default rootReducer;
