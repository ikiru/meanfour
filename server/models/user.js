let mongoose = require("mongoose");

// MOdel creation and validation
let UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank"]
    },

    win: {
      type: Number
    },

    count: {
      type: String
    }
  },
  { timestamps: true }
);

mongoose.model("User", UserSchema);
