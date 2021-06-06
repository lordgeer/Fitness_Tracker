const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        weight: {
          type: Number,
          default: 0
        },
        reps: {
          type: Number,
          default: 0
        },
        type: {
          type: String,
          trim: true,
        },
        sets: {
          type: Number,
          default: 0
        },
        distance: {
          type: Number,
          default: 0
        }
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;