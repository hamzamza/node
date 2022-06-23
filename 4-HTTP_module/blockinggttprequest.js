const { readFile, readFileSync } = require('fs')
const http = require('http')
error=readFileSync("./HTTP_module/error.html",'utf-8')
const server = http.createServer((req,res)=>{
switch(req.url){
    case "/":
        res.end("HOME PAGE")
        break

        case "/about":
            res.end("ABOUT PAGE")
            for(let i =0 ; i<400;i++)for(let j =0 ;j<1000;j++)
            console.log(`${i}   ${j}`);
            break

            default : 
            res.end(error)
            break;
}

})
server.listen(5000)
// in this example we will notice that the /about url request blocking all the other users 
// so let's use the asyncronos methodes 
// go to file 
