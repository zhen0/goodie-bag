/* eslint-disable quotes */
"use strict";
const Candy = require("../db/models/Candy.js");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    let candies = await Candy.findAll();

    res.json(candies);
  } catch (err) {
    console.log("Problem with getting sweety");
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let candyId = req.params.id;
    let data = await Candy.findById(candyId);
    res.json(data);
  } catch (err) {
    console.log("Problem with getting candy by Id");
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let candyId = req.params.id;
    let data = await Candy.increment("quantity", {
      where: { id: candyId },
      returning: true,
      plain: true
    });
    res.json(data[0][0]);
  } catch (err) {
    console.log("problem with API put request");
    next(err);
  }
});
module.exports = router;
