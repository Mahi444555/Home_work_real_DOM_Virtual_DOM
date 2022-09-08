const button= document.querySelector(".button");
let table = document.querySelector(".table");

let nameInput= document.querySelector("#name");
let countryInput= document.querySelector("#country");

button.addEventListener("click",function(){
    let name=nameInput.value;
    let country=countryInput.value;
//create table row and table head table data
    let template =  
            `  <tr>
                <td>${name}</td>
                <td>${country}</td>
             </tr> `;
    table.innerHTML += template;

   
    
})

// button.addEventListener("click",function(){
//     let name=nameInput.value;
//     let country=countryInput.value;
//     // let tr=document.createElement("tr");
//     // let td=document.createElement("td");

//    let x =document.getElementsByTagName("td").innerHTML=name;
//    let y= document.getElementsByTagName("td").innerHTML=country;
//     let z= document.getElementsByTagName("tr");
//     z.innerHTML=x;
// });

