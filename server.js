const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/getSongs", cors(), function(req, res) {
  let rawdata = fs.readFileSync("./songsList.json");
  console.log(JSON.parse(rawdata));
  res.json(JSON.parse(rawdata));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
