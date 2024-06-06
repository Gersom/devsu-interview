const mongoose = require("mongoose")

const name = 'items'
const config = {
  timestamps: true, // createAt, updateAt
  versionKey: false
}
const schema = {
  name: { 
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  },
  logo: { 
    type: String,
    required: false
  },
  dateRelease: { 
    type: Date,
    required: true
  },
  dateRevision: { 
    type: Date,
    required: true
  },
}

const ItemsScheme = new mongoose.Schema(schema, config)

// add static methods (functions) to model
ItemsScheme.static('findAllData', (pp) => {
  return ItemsModel.find({})
})
ItemsScheme.static('findOneData', (_id) => {
  return ItemsModel.findById(_id)
})
ItemsScheme.static('updateData', (_id, body) => {
  return ItemsModel.findOneAndUpdate({ _id }, body)
})
ItemsScheme.static('removeData', (_id) => {
  return ItemsModel.deleteOne({ _id })
})
ItemsScheme.static('dataExist', (_id) => {
  return ItemsModel.exists({})
})
ItemsScheme.static('createMany', (data = []) => {
  return ItemsModel.insertMany(data)
})

const ItemsModel = mongoose.model(name, ItemsScheme)

module.exports = ItemsModel