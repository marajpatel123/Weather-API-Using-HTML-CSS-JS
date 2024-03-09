const apiKey = "3f2b99fe385bf2cd85cb58a2788a1a08";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".weather-temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity-details").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind-details").innerHTML=data.wind.speed +"Km/h";

        if (data.weather[0].main == "Clear"){
            weatherIcon.src="clear.png"
        }
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src="clouds.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="drizzel.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="mist.png"
        }
        else
        weatherIcon.src="snow.png"
    
    document.querySelector(".weather").style.display="block"
    }
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
