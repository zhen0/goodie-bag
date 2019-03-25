/* eslint-disable quotes */
"use strict";
const Candy = require("../db/models/Candy.js");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    let candies = await Candy.findAll();

    res.json(candies);
  } catch (err) {
    console.log("Problem with getting sweety", err);
  }
});
module.exports = router;
