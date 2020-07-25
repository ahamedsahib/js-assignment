 let n=prompt("enter the name");
 let name =document.getElementById("name")
name.innerText = `Welcome to the family ${n} !!!!!!!!`;
 //let dmode = document.getElementById('dark');

// dmode.onclick = function changeColor(){
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//     document.body.style.fontFamily = 'Helvetica';
// }

const attr = document.getElementById("ss");
let dmode = document.getElementById('dark');
dmode.onclick = function changeColor(){ 
    
      attr.classList.toggle('dark');
}




const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);
console.log("hello");
