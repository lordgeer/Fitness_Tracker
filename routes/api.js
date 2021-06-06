const router = require("express").Router();
const workout = require("../models/workout.js");
const path = require("path");
// HTML
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


// JS
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

router.put("/api/workouts/:id", ({body,params}, res) => {
    workout.findByIdAndUpdate(params.id,
        {$push:{exercises:body}})

        .then(data => res.json(data))

        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;