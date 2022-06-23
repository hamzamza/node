const { readFile ,writeFile} = require('fs')
console.log("start");
readFile('./content/first.txt','utf-8',
(err,result)=>{
    if(err){
    console.log(err);
        return;
    }
const firsttext = result
        readFile('./content/second.txt','utf-8', 
        (err2,res2)=>{
            if(err2)
                return
                const secondtext = res2   
                    writeFilsne('./content/resutlAsync.txt',`Here is teh resluts
                    ${firsttext}
                    ${secondtext}`,(err,result)=>{
                        if(err)return
console.log("tehn we can do this one");                                              }
                             )
                     })
})
console.log('done with this one');
console.log('starting with next one ');
// this is what we call evel code example you already know what i'm sayng 
// so we gonna need call back functions to solve this problem
// francais
// francais 

