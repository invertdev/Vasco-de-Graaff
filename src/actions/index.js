export const selectButton = (message) => {
  console.log("Button Clicked");
  return{
    type: "BUTTON_CLICKED",
    payload: message
  }
  //This is the action
};

//The entire function is called the action creator: its job is to hold actions