import { Router } from "express";
import express from "express";
import getUsers from "../../actions/users/getUsers";
import getUserById from "../../actions/users/getUserById";

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

export default router;
