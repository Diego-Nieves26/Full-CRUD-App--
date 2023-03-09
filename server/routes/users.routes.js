const express = require("express");

// Controllers
const {
  createUser,
  getAllActiveUsers,
  updateUser,
  disableUser,
} = require("../controllers/users.controller");

// Middlewares
const { createUserValidator } = require("../middlewares/validators.middleware");
const { userExists } = require("../middlewares/users.middleware");

const usersRouter = express.Router();

//Routes

usersRouter.post("/new", createUserValidator, createUser);

usersRouter.get("/", getAllActiveUsers);

usersRouter.patch("/update/:id", userExists, updateUser);

usersRouter.delete("/delete/:id", userExists, disableUser);

module.exports = { usersRouter };
