const express = require("express");

const app = express();

const server = require("http").Server(app);

const indexPath = __dirname + "/index.html";

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.post("/", (req, res) => {
  res.sendFile(indexPath);
})

app.get("/lti", (req, res) => {
  res.sendFile(indexPath);
})

const PORT = 9999

server.listen(PORT, console.log(`Работают русские на порту: ${PORT}`));
