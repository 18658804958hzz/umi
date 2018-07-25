var redis = require('redis'),
    RDS_PORT = 6370,        //端口号
    RDS_HOST = '192.168.1.55',    //服务器IP
    RDS_OPTS = {auth_pass:'password'},            //设置器

const redisClient = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);
 module.exports = redisClient;

// 测试redis是否已连接成功

// client.on('ready',function(res){
//     console.log('ready');    
// });

// test

// client.on('connect',function(){
// 	client.set('c','成功',redis.print);
// 	client.get('a',redis.print);
// 	client.get('c',redis.print);
// 	client.hmset('short', {'js':'javascript','C#':'C Sharp'}, redis.print);
//     client.hmset('short', 'SQL','Structured Query Language','HTML','HyperText Mark-up Language', redis.print);

//     client.hgetall("short", function(err,res){
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }            
//         console.dir(res);
//     });
// })