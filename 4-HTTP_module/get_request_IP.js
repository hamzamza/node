const http = require('http')
const server = http.createServer((req,res)=>{
    var ip = req.headers['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;
    ip =  ip.slice(7)
console.log("request event from "+ip);
res.end("your ip is "+ip)
})
server.listen(5000,()=>{console.log("the server listen at port 5000");}) 