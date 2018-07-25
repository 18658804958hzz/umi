var db    = {};
var mysql = require('mysql');

// 数据库连接配置
var dbconfig = {
    host:"192.168.1.60",
    port:3306,
    user:"root",
    password:"root",
    database:"srit_v5",
    charset:'utf8_general_ci'
};
// 创建连接池
var pool  = mysql.createPool(dbConfig);
// 封装连接方法
db.getConnection = function(callback){
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(null);
            return;
        }
        callback(connection);
    });
}
db.pool = pool;
module.exports = db;

// 访问示例

// router.get('/test',function(req,res){
//   	res.set('Access-Control-Allow-Origin', req.get('origin'));
//   	db.getConnection(function(connection){
//     connection.beginTransaction(function(err) {
// 		    if (err) {
// 		        console.log(err);
// 		        return;
// 		    };
// 	      	var query1 = function(callback){
// 		      	connection.query('your sql1',function(error,results){
// 		        if (error) throw error;
// 		        callback(results,null)
// 		      	});
// 	      	}

// 	     	var query2 = function(callback){
// 		      	connection.query('your sql2',function(error,results){
// 		        if (error) throw error;
// 		        callback(results,null)
// 		      	});
// 	      	}
// 	      	async.series([query1, query2], function (err) {
// 	            if (err) {
// 	                console.log(err);
// 	                //回滚
// 	                connection.rollback(function () {
// 	                    console.log('出现错误,回滚!');
// 	                    //释放资源
// 	                    connection.release();
// 	                    res.send("出错了！!!")
// 	                });
// 	                return;
// 	            }
// 	            connection.commit(function (err) {
// 	                if (err) {
// 	                    console.log(err);
// 	                    return;
// 	                }
// 	                console.log('成功,提交!');
// 	                //释放资源
// 	                connection.release();
// 	                res.send("成功!")
// 	            });
// 	        })

// 	    })
//   	})
// });

// 不带事物

// pool.query("your sql",[your para],function(err,result){
// 	if(err) throw err;
// 	console.log(result)
// })