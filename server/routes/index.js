"use strict";
const { response } = require("express");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json("API of Wedding Putri and Arif ");
});
const Wishes = require("./wishesRoute");
router.use("/wishes", Wishes);

module.exports = router;
