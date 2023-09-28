import asyncHandler from "express-async-handler";

//@desc Auth user/set token
//route POST api/user/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Auth User" });
});

//@desc Register user
//route POST api/users
//@access Public
const RegisterUser = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Register User" });
});

//@desc Logout user
//route POST api/user/logout
//@access Public
const LogoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "logout User" });
});

//@desc Get user Profile
//route GET api/user/profile
//@access Private
const GetUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "User profile" });
});

//@desc Update user profile
//route PUT api/user/profile
//@access Private
const UpdateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Update user profile" });
});

export {
  authUser,
  RegisterUser,
  LogoutUser,
  GetUserProfile,
  UpdateUserProfile,
};
