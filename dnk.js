const log=["client-logo-1.png",
"client-logo-2.png",
"client-logo-2 (1).png",
"client-logo-2 (2).png",
"client-logo-3 (2).png",
"client-logo-4 (3).png",
"client-logo-2 (5).png",
"client-logo-5 (1).png"
];
const pic=document.querySelector('.slide-logo');
function genlogo(){
 
    var a= Math.floor(Math.random()* log.length);
    var img=document.createElement('img');
    img.src=log[a];
    pic.innerHTML='';
    pic.appendChild(img);
    pic.style.display='block';
    // console.log(img);
    }
    genlogo();
setInterval(genlogo,2000);

/*---------mail subscribe--------*/


function checkValid(){
   /* var mail=document.querySelector(".email");

    if(mail.checkValidity()){
        
        alert("  sus");
     
    }
    else{
        alert("not sus");
      
    }    */

const email=document.querySelector(".email");
const mail=email.value;
if(isValidEmail(mail)){
    alert("valid");
}
else{
    alert("not valid");
}

}
function isValidEmail(mail){
    var exp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return exp.test(mail);
}



