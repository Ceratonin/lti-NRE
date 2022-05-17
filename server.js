const data = require("./getData");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const server = require("http").Server(app);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Привет, безымянный чудик`);
  console.log("get");
});

app.post("/", (req, res) => {
  console.log("post");

  const fullData = req.body;

  console.log(fullData);

  userData = {
    username: data.getUsername(fullData),
    person: data.getPerson(fullData),
    userID: data.getUserId(fullData),
    courseTitle: data.getCourseTitle(fullData),
    roles: data.getRoles(fullData),
    contextLabel: data.getContextLabel(fullData),
  };

  const { username, person, userID, courseTitle, roles, contextLabel } =
    userData;

  const userString = `Здарова, ${roles} ${person}, твой никнейм: ${username}
  , твой индекс в системе: ${userID}, сейчас ты находишься в ${courseTitle} 
  название модуля ${contextLabel}-tool`;

  res.send(userString);
});

const PORT = 9999;

server.listen(PORT, console.log(`Работают русские на порту: ${PORT}`));
