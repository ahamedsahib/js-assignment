console.log("background colors");

  let arr=document.getElementById("txt");
  let color=["#F0F8FF","00FFFF","#BAC7E8","#8A2BE2","#D9EEFF","#B8860B", "#BADFE8"];
  let i=0;
  function change() {
      if(i >= color.length){ 
          clearInterval(timer); 
      }
      arr.style.backgroundColor = color[i++];
    }
    let timer = setInterval(change, 5000);
  
    //multiplication
    let num=prompt("enter the number of multiplication table");
    let range=prompt("enter the range");
    let mul=document.getElementById("mul");
    let res=0;
    for(let i=1;i<=range;i++)
    {
        res=i*num;
        mul.innerHTML+= `<li>${num} x ${i} =${res} </li>`;
    }