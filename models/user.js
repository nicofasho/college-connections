const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    rooms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Room"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);