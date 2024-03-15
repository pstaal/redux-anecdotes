import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    addNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return "";
    },
  },
});

export const setNotification = (message, time) => {
  return (dispatch) => {
    dispatch(addNotification(message));
    setTimeout(() => {
      dispatch(removeNotification());
    }, time);
  };
};

export const { addNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
