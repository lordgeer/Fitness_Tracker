const router = require("express").Router();
const workout = require("../models/workout.js");
const path = require("path");

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
  workout.find().then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  workout.create(body).then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    workout.find().then(workoutData => {
        res.json(workoutData);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id },
        {$inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body}},
        { new: true }).then(dbWorkout => {res.json(dbWorkout);})
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;