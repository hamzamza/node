const http = require('http');
const { listenerCount } = require('process');
const server = http.createServer((req,res)=>{
    console.log(`the uer requist the ulr : ${req.url}`);
if(req.url==='/')
res.end(`<body>
<h1> home page </h1>

</body>`)
else if(req.url==='/about')
res.end(`<body>
<h1> about page </h1>

</body>
`)

else res.end(`<body>
<h1> oops ! </h1>
<p> we can't find the url you looking for sorry </p>
<a href="/" > home page </a>
</body>
`)
})
server.listen(5000)
// -- we call this hifen hifen not a tiré blsix
// lodash is used for flat talbe items 