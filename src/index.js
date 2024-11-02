import express from "express";
import usersRouter from "../src/routes/users.js";
import "dotenv/config";
import loginRouter from "../src/routes/login.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
