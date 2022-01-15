import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "theme",
  initialState: {
    menuSelected: "",
  },
  reducers: {
    changeMenu: (state, action) => {
      state.menuSelected = action.payload;
    },
  },
});

export const { changeMenu } = userSlice.actions;
export default userSlice.reducer;
