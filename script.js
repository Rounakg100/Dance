const menulist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");
 
menubtn.onclick=()=> {
    menubtn.classList.add("hide");
    closebtn.classList.remove("hide");
    menulist.classList.add("active");
}
closebtn.onclick=()=> {
    menubtn.classList.remove("hide");
    closebtn.classList.add("hide");
    menulist.classList.remove("active");
}
var v1=setInterval(counter1,5);
var v2=setInterval(counter2,5);
var v3=setInterval(counter3,5);
 let c1=0;
 let c2=0;
 let c3=0;
 function counter1(){
    c1++;
    document.getElementById("c-1").innerHTML=c1+"+";
    if(c1==1240){
        clearInterval(v1);
    }
 }
 function counter2(){
    c2++;
    document.getElementById("c-2").innerHTML=c2;
    if(c2==2000){
        clearInterval(v2);
    }
 }
 function counter3(){
    c3++;
    document.getElementById("c-3").innerHTML=c3+"+";
    if(c3==1000){
        clearInterval(v3);
    }
 }