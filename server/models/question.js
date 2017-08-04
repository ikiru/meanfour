let mongoose = require("mongoose");

// Model creation and validation
let QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question cannot be blank"],
      minlength: [true, "Question has to be at least 15 characters"]
    },

    correct: {
      type: String,
      required: [true, "Correct answer cannot be blank"],
      minlength: [true, "Correct answer has to be at least 15 characters"]
    },

    fakeone: {
      type: String,
      required: [true, "Fake answers cannot be blank"],
      minlength: [true, "Fake answers  has to be at least 15 characters"]
    },

    faketwo: {
      type: String,
      required: [true, "Fake answers cannot be blank"],
      minlength: [true, "Fake answers has to be at least 15 characters"]
    },

    fakethree: {
      type: String,
      required: [true, "Fake answers cannot be blank"],
      minlength: [true, "Fake answers has to be at least 15 characters"]
    }
  },
  { timestamps: true }
);

mongoose.model("Question", QuestionSchema);
