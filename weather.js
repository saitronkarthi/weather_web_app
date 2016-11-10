// Last Name: Rajamani
// First Name: Karthikeyan
// UTA Id: 1001267157
//Project1-Weather web Application Due date:10/19/2016

// Put your Last.fm API key here
/*var api_key = "";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
        }
    };
    xhr.send(null);
}*/


//var api_key = "98f453b22fb8e2d7cc313779de835b38";
var api_key ="f6cf4b966784801160ca214c9fc430a6"// New API Key

function sendRequest () {
    var xhr = new XMLHttpRequest();
   // var method = "artist.getinfo";
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json"+"&units=imperial", true); //API call to the PHP script with json & Farenheit for Temp(imperial)
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
           document.getElementById("lblCity").innerHTML="<br/><br/>"+"City Name: "+json.name+"<br/>";// selecting the html eleemnt within div tag & updating it with the corresponding json value
           document.getElementById("lbllon").innerHTML="Longitude : "+json.coord.lon+"<br/>"; 
           document.getElementById("lbllat").innerHTML="Latitude : "+json.coord.lat+"<br/>"; 
           document.getElementById("lblsunrise").innerHTML=" The time of Sunrise:"+Date(json.sys.sunrise*1000)+"<br/>";
           document.getElementById("lblsunset").innerHTML="The time of Sunset:"+Date(json.sys.sunset*1000)+"<br/>";
           document.getElementById("lblpressure").innerHTML="Pressure:"+json.main.pressure+"  hPa"+"<br/>";
           document.getElementById("lblhumidity").innerHTML="Humidity:"+json.main.humidity+"%"+"<br/>";
           document.getElementById("lbltemp").innerHTML="Temperature:"+json.main.temp+" Farenheit"+"<br/>";
           document.getElementById("lblmintemp").innerHTML="Minimum Temperature:"+json.main.temp_min+" Farenheit"+"<br/>";
           document.getElementById("lblmaxtemp").innerHTML="Maximum Temperature:"+json.main.temp_max+" Farenheit"+"<br/>";
           document.getElementById("lblvisibilty").innerHTML="Visibilty:"+json.weather[0].main+"<br/>";
           document.getElementById("lblclouds").innerHTML="Clouds:"+json.clouds.all+"%<br/>"+"<br/>";
            //document.getElementById("output").innerHTML = "<pre>" + "Longitude"+json.coord.lon + "</pre>";
           //document.getElementById("test").innerHTML = "<pre>"+str+"</pre>";
           var suggestion=weatheraccerories(json.main.temp,json.weather[0].main); // function call to weather advising function(weatheraccesories)
           document.getElementById("lblsuggest").innerHTML=suggestion;
           document.getElementById("sugimage").width=100;
           document.getElementById("sugimage").height=100;
        }
    };
    xhr.send(null);
}

function weatheraccerories(temp,visibilty){ // function with temp & visibility as inputs & outputs the weather advice
    if(visibilty=='Rain' || visibilty=='Clouds')
    {
     document.getElementById("sugimage").src="images/rain.jpg";// update the corresponding image from the images folder
     return "Weather advice:"+"Going to rain  or raining please bring an umbrella";
    }
    else if(temp<70 && visibilty!='Rain')
    {
     document.getElementById("sugimage").src="images/coat.jpg";
     return "Weather advice:" +"It is Cold! Please use a coat";
    }
    else if (temp>70 && temp <80 && visibilty=='Clear')
    {
        document.getElementById("sugimage").src="images/sunny.jpg";
        return "Weather advice:" +"It is a nice weather ";
    }
    else if (temp>80)
    {
        document.getElementById("sugimage").src="images/sunscreen.jpg";
        return "Weather advice:"+"It is hot use sun screen"
    }
    else
        {
        document.getElementById("sugimage").src="images/sunny.jpg";
        return "Weather advice:" +"The weather seems to be good ";
    }


}
