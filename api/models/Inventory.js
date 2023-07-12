const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let InventorySchema = new Schema(
  {},
  {
    collection: "Inventory",
  }
);

let Inventory = mongoose.model("Inventory", InventorySchema);

// Define additional functions
function getAllInventories() {
  let items = [
    {
      name: 'Aircraft',
      object_id: '11111'
    }
  ];
  return items
}

module.exports = {
  Inventory: Inventory,
  getAllInventories: getAllInventories
};