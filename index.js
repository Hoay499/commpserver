const express = require('express')
const app = express()
const port = 3000
// 引入路径配置
require('./router/index')(app)

//设置允许跨域访问该服务。
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-origin', '*');
	//Access-Control-Allow- Headers， 可根据浏览器的F12查看，把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type' );
	res.header('Access-Control-Allow -Methods', '*'); 
	res.header(' Content-Type'，'application/json;charset=utf-8'); 
	next();
});


		//404页面
		app.use(function(req, res, next) {
			let err = new Error('Not Found');
			err.status = 404;
			next(err);
		})
		//出现错误处理
		app.use(function(err, req, res, next) {
			res.status(err.status || 500)
			res.send(err.message);
		})


		//输出在控制台
		app.listen(port, () => console.log(`Example app listening on port ${port}!`))
