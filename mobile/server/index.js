const express = require("express");
const { log } = require("./Utils/logger");

const port = 8080;
const app = express();

app.get("/", (_req, res) => {
  res.send("Spotcloud Server");
});

app.get(`/users/:userId`, (_req, res) => {
  res.send({
    id: 54684654616,
    name: "John Doe",
    email: "test@test.com",
  });
});

app.listen(port, () => {
  log(`Local server: http://localhost:${port}`);
});
