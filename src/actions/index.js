export const selectButton = (id, message) => {
  return{
    type: "BUTTON_CLICKED",
    id,
    message
  }
  //This is the action
};

//The entire function is called the action creator: its job is to hold actions