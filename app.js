const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/photos", (req, res, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});