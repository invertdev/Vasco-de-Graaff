export const menuSelected = (click) => {
  return{
    type: "MENU_SELECTED",
    click,
  }
};

export const menuClose = (click) => {
  return{
    type: "MENU_CLOSE",
    click,
  }
}