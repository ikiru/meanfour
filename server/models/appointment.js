let mongoose = require("mongoose");

// MOdel creation and validation
let AppointmentSchema = new mongoose.Schema(
  {
    appdate: {
      type: Date,
      required: [true, "Date cannot be blank"]
    },

    time: {
      type: Date
    },

    //  name of the user who liked it
    complain: {
      type: String
    }
  },
  { timestamps: true }
);

mongoose.model("Appointment", AppointmentSchema);
