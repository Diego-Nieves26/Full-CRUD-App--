import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import { getUsers } from "./users.slice";

const API = "https://proyect-crud-api.herokuapp.com/api/v1/users/";

export const userDeletedSlice = createSlice({
  name: "userDeleted",
  initialState: null,
  reducers: {
    setUserDeleted: (state, action) => action.payload,
  },
});

export const { setUserDeleted } = userDeletedSlice.actions;

export const removeUser = (id, name) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .delete(`${API}${id}/`)
    .then(() => {
      dispatch(setUserDeleted(name));
      dispatch(getUsers());
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export default userDeletedSlice.reducer;
