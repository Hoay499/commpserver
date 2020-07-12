var  dbserver = require('../dao/dbserver');
module.exports = function(app){
	app.get('/login',(req,res)=>{
		dbserver.userLogin(res);
	});
	app.get('/', (req, res) => res.send('Hello World!'));
}