const {readFileSync,writeFileSync, writeFile}= require('fs');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first);
console.log(second);
writeFileSync('./content/output-syn.txt',`clean everything 
`)

writeFileSync('./content/output-syn.txt',`here is the output : ${first} 
${second}`,{flag :'a'})
 
