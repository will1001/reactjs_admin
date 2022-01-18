import { createSlice } from "@reduxjs/toolkit";

export const ListSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getListStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getListSuccess: (state, action) => {
      state.isFetching = false;
      state.lists = action.payload;
    },
    getListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteListStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteListSuccess: (state, action) => {
      state.isFetching = false;
      state.lists.splice(
        state.lists.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateListStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateListSuccess: (state, action) => {
      state.isFetching = false;
      state.lists = action.payload;
    },
    updateListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //CREATE
    addListStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addListSuccess: (state, action) => {
      state.isFetching = false;
      state.lists.push(action.payload);
    },
    addListFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getListStart,
  getListSuccess,
  getListFailure,
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  updateListStart,
  updateListSuccess,
  updateListFailure,
  addListStart,
  addListSuccess,
  addListFailure,
} = ListSlice.actions;

export default ListSlice.reducer;
