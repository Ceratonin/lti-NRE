const express = require("express");

const app = express();

const server = require("http").Server(app);

const indexPath = __dirname + "/index.html";

const name = "Alba"

app.get("/", (req, res) => {
  res.send(`Привет, чудик по имени ${name}`);
  console.log("get")
});

app.post("/", (req, res) => {
  res.send(`Привет, чудик по имени ${name}`);
  console.log("post")
  console.log(req.form)
})

// app.get("/lti", (req, res) => {
//   res.sendFile(indexPath);
// })

const PORT = 9999

server.listen(PORT, console.log(`Работают русские на порту: ${PORT}`));
