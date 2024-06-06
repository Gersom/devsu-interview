const { ItemsModel } = require("../models")

const getAllItemsController = async () => {
  const items = await ItemsModel.findAllData()
  return items
}

const getItemController = async (id) => {
  const item = await ItemsModel.findOneData(id)
  return item
};

const postItemController = async (data) => {
  await ItemsModel.create(data)
  return {
    success: 'Item data was saved correctly.'
  }
}

const updateItemController = async (id, data) => {
  await ItemsModel.updateData(id, data)
  return {
    success: 'Item data was update correctly.'
  }
}
const deleteItemController = async (id, data) => {
  await ItemsModel.removeData(id)
  return {
    success: 'Item data was update correctly.'
  }
}

module.exports = {
  getAllItemsController,
  getItemController,
  postItemController,
  updateItemController,
  deleteItemController
};
