// Models
const { User } = require("../models/user.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createUser = catchAsync(async (req, res, next) => {
  const { first_name, last_name, email, password, birthday } = req.body;

  const newUser = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });

  newUser.password = undefined;

  res.status(201).json({
    status: "success",
    newUser,
  });
});

const getAllActiveUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: { status: "active" },
  });

  res.status(200).json({
    status: "success",
    users,
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { first_name, last_name, email, password, birthday } = req.body;

  await user.update({ first_name, last_name, email, password, birthday });
  res.status(204).json({ status: "success" });
});

const disableUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: "disable" });
  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllActiveUsers,
  createUser,
  updateUser,
  disableUser,
};
