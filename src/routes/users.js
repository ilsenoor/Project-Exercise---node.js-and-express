import { Router } from "express";
import express from "express";
import getUsers from "../actions/users/getUsers.js";
import getUserById from "../actions/users/getUserById.js";
import createUser from "../actions/users/createUser.js";
import deleteUser from "../actions/users/deleteUser.js";
import updateUserById from "../actions/users/updateUserById.js";
import authMiddleware from "../middleware/auth.js";

const router = Router();

//get Users
router.get("/", (req, res) => {
  const users = getUsers();
  res.json(users);
});

//get Users By Id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);

  if (!user) {
    res.status(404).json({ message: `User with id ${id} not found` });
  } else {
    res.status(200).json(user);
  }
});

//create User
router.post("/", authMiddleware, (req, res) => {
  const { username, password, name, image } = req.body;
  const newUser = createUser(username, password, name, image);
  res.status(201).json(newUser);
});

//delete User
router.delete("/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const deletedUserId = deleteUser(id);

  res.status(200).json({
    message: `User with id ${deletedUserId} was deleted!`,
  });
});

//update User By Id
router.put("/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const { username, password, name, image } = req.body;
  const updatedUser = updateUserById(id, username, password, name, image);
  res.status(200).json(updatedUser);
});

export default router;
