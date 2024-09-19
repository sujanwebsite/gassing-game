let playerone=document.querySelector(".playerone")
let inputone=document.querySelector(".inputone")
let buttonone=document.querySelector(".buttonone")
let error=document.querySelector(".error")

let playertwo=document.querySelector(".playertwo")
let inputtwo=document.querySelector(".inputtwo")
let buttontwo=document.querySelector(".buttontwo")
let error2=document.querySelector(".error2")
let chance=document.querySelector(".chance")

let count=5


buttonone.addEventListener("click",function(){
    if(!inputone.value){
        error.innerHTML="Enter a something";

    }else if(isNaN(inputone.value)){
        error.innerHTML="Enter a Number";

    }else if(!(inputone.value<=10 && inputone.value>0)){
        error.innerHTML="Enter a namber from 1 to 10";


    }else{

        playertwo.style.display="block"
        inputtwo.style.display="block"
        buttontwo.style.display="block"
        error2.style.display="block"
        chance.innerHTML=`Chance :${count}`
        


        playerone.style.display="none"
        inputone.style.display="none"
        buttonone.style.display="none"
        error.style.display="none"





   
    }


})
 
buttontwo.addEventListener("click",function(){

    if(!inputtwo.value){
        error.innerHTML=" please Enter a something";

    }else if(isNaN(inputone.value)){
        error.innerHTML=" please Enter a Number";

    }else if(!(inputtwo.value<=10 && inputtwo.value>0)){
        error2.innerHTML=" please Enter a namber from 1 to 10";
    }else{

        if(count>1){
           count--
           chance.innerHTML=`Chance :${count}`       
           if( inputone.value==inputtwo.value){
            buttontwo.style.display="none"
                playertwo.innerHTML="player Two is Winner";
         }
    }else{
        count=0
        chance.innerHTML=`Chance :${count}`
        buttontwo.style.display="none"
        playertwo.innerHTML="player One is Winner"; 
        playertwo.classList.remove('winner');
    }
}




})