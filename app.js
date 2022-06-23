const glo = {
    'me':"hamza",
    'you':"mohamed"
}
const {you} = glo
console.log(you);
// we call this distruction an object from an otehr object 
// we use it while importing modules ;


// ------------ int this example below we use a function like cin in c++ it's asyncron if you put some code after it 
// ----------- but if you put the code inside of the call back function it will run just like a normal code input and output

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  console.log("we preciate that");
  rl.close();
});
//  console.log("this goes first");

