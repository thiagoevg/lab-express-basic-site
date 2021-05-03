const express = require("express");
const router = require("express").Router();
const path = require("path");

const app = express();
const PORT = 4000;
app.use(express.static("public"));

router.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/home.html"));
});

router.get("/about", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get("/works", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/works.html"));
});

app.use("/", router);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
