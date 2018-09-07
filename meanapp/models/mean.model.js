var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')  // for pagination

// Set up the schema
var MeanSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

MeanSchema.plugin(mongoosePaginate)
// Generate the collection with the schema ???
const Mean = mongoose.model('Mean', MeanSchema)

// After this, Mean will have some default db methods
// like findById(), save(), remove(), paginate()
// you get these from mongoose for free which is awesome 

module.exports = Mean;