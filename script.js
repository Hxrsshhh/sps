let arr=[ "stone","paper","scissor"];
let mess=document.querySelector(".mess");
let usercount=0;
let compcount=0;
let userinput=document.querySelectorAll("#hand");
let userscr=document.querySelector("#userscr");
let compscr=document.querySelector("#compscr");

const check=(elem)=>{
    
    let x=parseInt(Math.random()*3);
    const userin=elem.getAttribute("class");
    let compin=arr[x];
    console.log(compin);
    console.log(userin);
    //drawcondition
    if(userin===compin){
     console.log("draw");
     mess.innerHTML=" <h2 >DRAW !</h2>";
      mess.style.color="white";
     
    }
     //wincondition
    else if( userin==="paper" && compin==="stone" || userin==="stone" && compin==="scissor"|| userin=="scissor" && compin=="paper" ){
     console.log("win")
      mess.innerHTML=" <h2 >WIN !</h2>";
       mess.style.color="rgb(48, 201, 48)";
       usercount++;
       userscr.innerText=usercount;

    }
    //losecondition
    else{
    console.log("lose")
     mess.innerHTML=" <h2 >LOSE !</h2>";
     mess.style.color="red";
     compcount++;
     compscr.innerText=compcount;

    }
}
const remove=(elem)=>{
    if(!(elem.style.animation=="")){
        elem.style.animation==" size2 .85s  ease-in 1"
    }
    
}
userinput.forEach(element => {
        element.addEventListener("click",()=>{
        element.style.animation=" size1 .8s  ease-in-out 1";
        check(element);
        //remove(element);
       
    })
});
console.log(arr);