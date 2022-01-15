import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
    form: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setData, setForm } = userSlice.actions;
export default userSlice.reducer;
