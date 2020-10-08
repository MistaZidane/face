var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let VerifySchema = new Schema({
    name: String,
    transctionAPI: String,
});

module.exports = mongoose.model('Blog', VerifySchema);