import express from "express";

import handleUsers from "./handleUsers.js";

const app = express();

app.get("/", async (req, res) => {
  let response = await fetch("https://dummyjson.com/users");
  let textR = await response.json();
  res.send(handleUsers(textR.users));
});

app.listen(3000, () => {
  console.log("Server running on port localhost://3000");
});
