const router = require("express").Router();
const workout = require("../models/workout.js");
const path = require("path");
const { db } = require("../models/workout.js");

router.get("/" , (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
  db.find().then(dbData => {
      res.json(dbData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.create(body).then(dbData => {
      res.json(dbData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;