var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let VerifySchema = new Schema({
    name: String,
    transctionId: String,
    callback: String
});

module.exports = mongoose.model('Blog', VerifySchema);