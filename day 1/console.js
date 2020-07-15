var name="ahamed";
console.log(name);//it will print what we give inside a log() it is like print statement
 var a=null;
 console.log(a);
 var array=['abc','def','ghi'];
 console.log(array);//it will print an array what we initalize
 console.log(array[1]);// it will print the array index 1 element
var a = {name:"pranab", dept:"cse", city:"mumbai"}
var b = {name:"raj", dept:"it", city:"calicut"}
var c = {name:"sushant", dept:"mech", city:"kolkata"}
console.log({a,b,c});//it will print the whole object a,b,c in a single it reduces the line  
console.table({a,b,c});//it will  group all those a,b,c as a table with with object name as a row name   
console.group('abc');//it is like a function it is used to group what we perform inside the group and it wil grouped all together 
console.warn("something wrong");// it is used to give a waning message with symbol
console.error("some error occured");// it is used to show an error symbol
console.log('end');
console.groupEnd('abc');//it is used to end the group from where we start until this command all the things give inside the group are grouped
console.time('abc');//it denotes how many time taken by the compiler to excecute these code  
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); 
 fun2(); 
console.timeEnd('abc');//its wil take until this to calculate the time taken for these codes
console.info(a);//it will information about what we give inside .info()  
console.clear();//it is used to clear all the  prev results of console 
