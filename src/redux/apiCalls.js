import { publicRequest, userRequest } from "../requestMethods";

import {
  getMovieFailure,
  getMovieStart,
  getMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  updateMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
  addMovieFailure,
  addMovieStart,
  addMovieSuccess,
} from "./MoviesRedux";

import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess,
} from "./UsersRedux";

import {
  getListFailure,
  getListStart,
  getListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess,
  addListFailure,
  addListStart,
  addListSuccess,
} from "./ListsRedux";

//movies
export const getMovies = async (dispatch) => {
  dispatch(getMovieStart());
  try {
    const res = await userRequest.get("/movies");
    dispatch(getMovieSuccess(res.data));
  } catch (err) {
    dispatch(getMovieFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await userRequest.delete(`/movies/${id}`);
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};

export const updateMovie = async (id, Movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await userRequest.put(`/movies/${id}`, Movie);
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFailure());
  }
};
export const addMovie = async (Movie, dispatch) => {
  dispatch(addMovieStart());
  try {
    const res = await userRequest.post(`/Movies`, Movie);
    dispatch(addMovieSuccess(res.data));
  } catch (err) {
    dispatch(addMovieFailure());
  }
};

//users
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, User, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`/users/${id}`, User);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const addUser = async (User, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/auth/register`, User);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

//lists
export const getLists = async (dispatch) => {
  dispatch(getListStart());
  try {
    const res = await userRequest.get("/lists");
    dispatch(getListSuccess(res.data));
  } catch (err) {
    dispatch(getListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await userRequest.delete(`/lists/${id}`);
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

export const updateList = async (id, List, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await userRequest.put(`/lists/${id}`, List);
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};
export const addList = async (List, dispatch) => {
  dispatch(addListStart());
  try {
    const res = await userRequest.post(`/lists`, List);
    dispatch(addListSuccess(res.data));
  } catch (err) {
    dispatch(addListFailure());
  }
};
