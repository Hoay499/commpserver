var  dbmodel = require('../model/dbmodel');

var User = dbmodel.model('User');

exports.userLogin = function(res){
	USer.find(function(err,val){
		if(err){
			console.log('用户数据查找失败！' +　err);
		}else{
			res.send(val);
		}
	})
} 