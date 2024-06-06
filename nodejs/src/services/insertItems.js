const { ItemsModel } = require("../../models/index")
const itemsData = require("../../data/items.json")
const insertRecords = require("./insertRecords")

const insertCountries = async () => {
  insertRecords({
    name: 'Items',
    model: ItemsModel,
    data: itemsData,
  })
}

module.exports = insertCountries