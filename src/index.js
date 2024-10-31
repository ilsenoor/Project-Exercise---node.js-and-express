import express from "express";
import usersRouter from "../src/routes/users.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
