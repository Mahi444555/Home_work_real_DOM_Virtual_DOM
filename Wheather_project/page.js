let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");

let iconefile;

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");



searchButton.addEventListener('click', (e)=>
{
    e.preventDefault();
    getweather(searchInput.value);
    searchInput.value='';

});

const getweather=async (city)=>
{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0f97f2bac9d0886e817cee4dd54cd38`,
        {mode: 'cors'}
        );

        const weatherData = await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);

        if(id<300 && id>200){//thunderstrom weather
            tempicon.src="img/thunderstrom.png"
        }

       else if(id<400 && id>300){   //
            tempicon.src="img/atmospher.png"
        }

       else if(id <600 && id > 500){    //500-550 rain
            tempicon.src="img/heavy-rain.png"
        }
        else if( id <650 && id > 600){
            tempicon.src= "img/snow.png"
        }
        else if(id < 780 && id > 700){  //
            tempicon.src= "img/fogg.jpg"
        }

       

       else if(id<800 && id>750){
            tempicon.src="img/sun.png"
        }

       else  if(id>800){
            tempicon.src="img/clouds.png"
        }
        else if(id==800){

        }


    }
catch(error)
{
    alert('city not found');
}


};













// code for fetching the current locatin wheater
// firstly we have to load current city weather hence write listners

window.addEventListener("load", ()=>{
    let long;       //longitude
    let lat ;       //latitude

    if(navigator.geolocation)
    {

        navigator.geolocation.getCurrentPosition((position)=>{
        
        long=position.coords.longitude;
        lat = position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/"



        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d0f97f2bac9d0886e817cee4dd54cd38   `
        fetch(api).then((response)=>{

            return response.json();

        })

        .then (data =>
            {
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);

                if(id<300 && id>200){
                    tempicon.src="img/thunderstrom.png"
                }

               else if(id<400 && id>300){
                    tempicon.src="img/atmospher.png"
                }

               else if(id < 600 && id >500){
                    tempicon.src="img/heavy-rain.png"
                }

               else if(id<700 && id >650){
                    tempicon.src="img/snow.png"
                }

               else if(id<800 && id>700){
                    tempicon.src="img/atmosphere.png"
                }
                else if(id > 800){
                    tempicon.src="img/clouds.png"
                }
               else  if(id==800){
                    tempicon.src="img/snow.png"
                }


                console.log(data);

           })

        }
       
        )}


})