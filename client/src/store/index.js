import { configureStore } from "@reduxjs/toolkit";
import userDeleted from "./slices/userDeleted.slice";
import isLoading from "./slices/isLoading.slice";
import users from "./slices/users.slice";
import userSelected from "./slices/userSelected.slice";

export default configureStore({
  reducer: {
    isLoading,
    users,
    userDeleted,
    userSelected,
  },
});
