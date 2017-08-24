const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var eventSchema = new Schema({
    name:String,
    date:Date,
    time:String,
    address:String,
    city:String,
    state:String,
    imageUrl:String
});

module.exports = mongoose.model('Event', eventSchema);