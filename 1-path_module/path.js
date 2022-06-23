const path = require('path')
path.sep='d'
console.log(path.sep);

const filepath = path.join('content','subfolder','test.txt')
console.log(filepath);
console.log(typeof(filepath));
const base = path.basename(filepath);
console.log(base);
const absolute = path.resolve(__dirname,filepath);
console.log(absolute);
