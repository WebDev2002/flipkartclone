 //first menu slider
   let image1 = document.querySelectorAll(".item1");
   let btn_pre1= document.querySelector(".btn-pre1");
   let btn_next1= document.querySelector(".btn-next1");

   btn_pre1.style.display = "none"

 let control1 = 0;
 function slider1(){
    for(i=0; i<image1.length; i++){
        image1[i].style.transform = `translateX(-${control1*100}%)`
    }
    if(control1==1){
        btn_pre1.style.display = "block";
    }
    else if(control1==0){
        btn_pre1.style.display = "none";
    }
    else if(control1==5){
        btn_next1.style.display = "none";
    }
    else{
        btn_next1.style.display = " block";
    }
 }
function next1(){
    control1++;
    slider1();
    
}
function pre1(){
    control1--;
    slider1();
}

//second menu slider

let image2 = document.querySelectorAll(".item2");
let btn_pre2= document.querySelector(".btn-pre2");
let btn_next2= document.querySelector(".btn-next2");

btn_pre2.style.display = "none"

let control2 = 0;
function slider2(){
 for(i=0; i<image2.length; i++){
     image2[i].style.transform = `translateX(-${control2*100}%)`
 }
 if(control2==1){
     btn_pre2.style.display = "block";
 }
 else if(control2==0){
     btn_pre2.style.display = "none";
 }
 else if(control2==4){
     btn_next2.style.display = "none";
 }
 else{
     btn_next2.style.display = " block";
 }
}
function next2(){
 control2++;
 slider2();
 
}
function pre2(){
 control2--;
 slider2();
}

// third menu slider

let image3 = document.querySelectorAll(".item3");
let btn_pre3= document.querySelector(".btn-pre3");
let btn_next3= document.querySelector(".btn-next3");

btn_pre3.style.display = "none"

let control3 = 0;
function slider3(){
 for(i=0; i<image3.length; i++){
     image3[i].style.transform = `translateX(-${control3*100}%)`
 }
 if(control3==1){
     btn_pre3.style.display = "block";
 }
 else if(control3==0){
     btn_pre3.style.display = "none";
 }
 else if(control3==4){
     btn_next3.style.display = "none";
 }
 else{
     btn_next3.style.display = " block";
 }
}
function next3(){
 control3++;
 slider3();
 
}
function pre3(){
 control3--;
 slider3();
}