const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (req, res, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  response.sendFile(__dirname + "/views/works.html");
});
app.get("/photos", (req, res, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
  console.log("Server launched and accessible on http://localhost:3000/")
})