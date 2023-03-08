import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

const API = "https://full-crud-app-back.onrender.com/api/v1/users/";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
  },
});

export const { setUsers } = usersSlice.actions;

export const getUsers = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(API)
    .then((res) => dispatch(setUsers(res.data.users)))
    .finally(() => dispatch(setIsLoading(false)));
};

export default usersSlice.reducer;
