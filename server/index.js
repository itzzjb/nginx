// We are going to build an express server here.

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I am a endpoint");
});

app.listen(7777, () => {
  console.log("Listening on port 7777");
});
