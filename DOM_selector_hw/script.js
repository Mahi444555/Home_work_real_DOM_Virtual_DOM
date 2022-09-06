// selecting id using id selector
let head= document.getElementById("head2");
head.style.color="red";
head.innerHTML="this is heading change color by using id selector";
head.style.fontSize="50px";

// class selector
let para = document.getElementsByClassName("parag");
para[0].style.color="blue";

//by tag name: tag selector
var tag= document.getElementsByTagName("h3")[0].innerHTML="change";


//query selector
const q = document.querySelector(".query");
q.style.fontSize="50px";
q.style.backgroundColor="pink";


//query selector using id 
let q1= document.querySelector("#name");
q1.style.color="green";
q1.style.fontSize="50px";


//to create element
let li=document.createElement("li");
