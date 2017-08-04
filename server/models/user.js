let mongoose = require("mongoose");

// MOdel creation and validation
let UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank"]
    },

    appointment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: " Appointment"
      }
    ],

  { timestamps: true }
);

mongoose.model("User", UserSchema);
