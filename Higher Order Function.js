
const splitStr= function (str){
 
 return str.replaceAll(' ','_').toLowerCase().slice(0,str.length -1);
}

const highOrderFn= function (str,fn){
 console.log(str);
 console.log(` ${fn(str)}`)
}


highOrderFn('java Script is the best Language ', splitStr);


// Function Return A function 

const greeting=function(greet)
{
 return function(name)
{
console.log(`${greet} ${name}`);
}}

const greetmessage= greeting("hello");
greetmessage("Adil")