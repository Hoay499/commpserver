// 数据库连接
var mongoose  = require('mongoose');

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/compp');
db.on('error', console.error. bind(console, 'connection error:'));
db.once('open', function() {
console.info('数据库compp打开成功!')
});

module.exports = db;
