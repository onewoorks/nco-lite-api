const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RefTeam = new Schema(
  {
    hq_id: {
      type: String,
    },
    team_name: {
      type: String,
    },
    unit: {
      type: String,
    },
  },
  {
    collection: "RefTeam",
  }
);

module.exports = mongoose.model("RefTeam", RefTeam);
