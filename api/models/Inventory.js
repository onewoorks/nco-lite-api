const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Inventory = new Schema(
  {},
  {
    collection: "Inventory",
  }
);

module.exports = mongoose.model("Inventory", Inventory);
