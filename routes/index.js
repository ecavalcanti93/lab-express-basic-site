const express = require("express");
const router = new express.Router();

router.get(["/", "/home"], (req, res) => {
  res.send("homepage");
});

router.get("/about", (req, res) => {
  res.send("about page");
});

router.get("/contact", (req, res) => {
  res.send("works page");
});

router.get("/works", (req, res) => {
    res.send("works page");
  });

  router.get("/photos", (req, res) => {
    res.send("photos page");
  });

module.exports = router;