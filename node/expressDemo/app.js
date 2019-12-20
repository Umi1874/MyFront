const express = require("express");
const path = require("path");
const proxy = require('express-http-proxy')
const app = express();

const apiProxy = proxy('http://172.16.0.23:1088', {
    proxyReqPathResolver: function (req, res) {
        var parts = req.url.split('?');
        console.log(parts[1])
        console.log(parts[0])
        var queryString = parts[1];
        var updatedPath = '/api' + parts[0];
        console.log(updatedPath)
        return updatedPath + (queryString ? '?' + queryString : '');
    }
})
// move in date api
const govermentApiProxy = proxy('https://data.gov.au', {
    proxyReqPathResolver: function (req, res) {
        var parts = req.url.split('?');
        console.log(parts[1])
        console.log(parts[0])
        var queryString = parts[1];
        var updatedPath = '/data/api/3/action/datastore_search';
        console.log(updatedPath + (queryString ? '?' + queryString : ''))
        return updatedPath + (queryString ? '?' + queryString : '');
    }
})
// 因为前端资源请求前面有static路径, 所以我们静态文件的路由处理，前面也要加static路径进行匹配。
app.use(express.static(path.join(__dirname, 'dist')));

// 为了处理html 文件的请求。
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})
app.get('/dashborad', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.use('/testapi', apiProxy)
app.use('/govService', govermentApiProxy)

app.listen(9528, () => console.log("open server"));