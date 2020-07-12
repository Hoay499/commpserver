var db = require('../config/db');
var mongoose = requiew('mongoose');
var  Schema  = mongoose.Schema;

//用户表
var SchemaUSer = new Schema;
module.exports = db.model('User',SchemaUSer);