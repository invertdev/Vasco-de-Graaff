export const selectButton = (id, message) => {
  return{
    type: "BUTTON_CLICKED",
    id,
    message
  }
  //This is the action
};

export const contact = (id, reply) => {
  return{
    type: "CONTACT",
    id,
    reply
  }
}

//The entire function is called the action creator: its job is to hold actions