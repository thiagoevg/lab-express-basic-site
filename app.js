// Due to incompatibilities with the express, we have to use a slightly different syntax to import the components we need

// import express
const express = require("express");

// import Router from express
const router = require("express").Router();

// import path from node
const path = require("path");

// instantiate a new web server
const app = express();
const PORT = 4000;

// Provides that the browser access the static content avaible in the public folder, such as the stylesheet, images and scripts
app.use(express.static("public"));

// Estabilishes the routes from which the HTTP method GET will be triggered launching the respective callbacks functions
router.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/home.html"));
});

router.get("/about", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get("/works", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/works.html"));
});

// Estabilishes the link between web server and the router
app.use("/", router);

// Make the web server look for calls from differents routes
app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
