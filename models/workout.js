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
        required: "Name is required"
      },
      duration: {
      type: Number,
      required: "Duration is required!"
      },
      reps: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        trim: true,
        required: "Type is required!"
      },
      sets: {
        type: Number,
        default: 0
      },
      weight: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }

  ],
  // totalDuration: {
  //   type: Number,
  //   default: 0,
  // }

});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;