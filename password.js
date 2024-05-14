const passwordBox=document.getElementById("password");
const btn=document.getElementById("btn");
const lenght=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase=upperCase.toLowerCase();
const number="1234567890"
const special="!@#$%^&*()_+"
console.log(lowerCase.length)

const allchars=upperCase+lowerCase+number+special;

function generatePass(){
    let password=0
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    password+=special[Math.floor(Math.random()*special.length)]

    while(lenght > password.length){
      password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordBox.value=password
}


btn.addEventListener("click",generatePass)

function copyPswd(){
 passwordBox.select();
 document.execCommand("copy");
}