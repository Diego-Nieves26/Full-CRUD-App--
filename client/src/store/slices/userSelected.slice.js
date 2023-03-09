import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import { getUsers } from "./users.slice";

const API = "https://full-crud-app-back.onrender.com/api/v1/users/new";
const APIedit = "https://full-crud-app-back.onrender.com/api/v1/users/update/";


export const userSelectedSlice = createSlice({
  name: "userSelected",
  initialState: null,
  reducers: {
    setUserSelected: (state, action) => action.payload,
  },
});

export const { setUserSelected } = userSelectedSlice.actions;

export const editUser = (id, data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(`${APIedit}${id}/`, data)
    .then(() => dispatch(getUsers()))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addUser = (data) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(API, data)
    .then(() => dispatch(getUsers()))
    .finally(() => dispatch(setIsLoading(false)));
};

export default userSelectedSlice.reducer;
