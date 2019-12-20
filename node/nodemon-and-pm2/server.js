// 搭建简单服务器
/* const fastify = require("fastify")();
const url = require("url")


fastify.get("/", async () => {
  return {
    status: "1234"
  };
});

fastify.listen(4001, function() {
  console.log("server start on 4001");
}); */
// Node基础
const http = require('http')
const fs = require('fs')

const port = 4000

var server = http.createServer()
server.on('request',function(req,res){
  var url = req.url
  console.log(url)
  if(url === '/') {
    fs.readFile('./resource/index.html', function(err,data) {
      if(err){
        res.setHeader('Content-Type','text/plain;charset=utf8')
        res.end('file load error')
      } else {
        res.setHeader('Content-Type','text/html;charset=utf8')
        res.end(data)
      }
    })
  } else if (url === '/xiaoming') {
    // url：统一资源定位符
    // 一个 url 最终其实是要对应到一个资源的
    fs.readFile('./resource/timg.jpg', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('文件读取失败，请稍后重试！')
      } else {
        // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
        // res.end() 支持两种数据类型，一种是二进制，一种是字符串
        // 图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})

server.listen(port, function() {
  console.log(`Server running on ${port}`)
})