var options = {
        hostname: '192.168.1.74',
        port: 2220,
        path: '/add4',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(param)//param为接收前台传递的参数
        }
    };

module.springCloudConfig = options;


// 连接示例
// var req = http.request(options, (res) => {
//         console.log(`STATUS: ${res.statusCode}`);
//         console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => {
//             console.log(`BODY: ${chunk}`);
//             ress.send(chunk);
//         });
//         res.on('end', () => {
//             console.log('No more data in response.');
//         });
//     });
// 	req.on('error', (e) => {
//         console.log(`problem with request: ${e.message}`);
//     });

//     req.write(postData);
//     req.end();