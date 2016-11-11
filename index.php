<!-- Last Name: Rajamani
First Name: Karthikeyan
UTA Id: 1001267157
Project1-Weather web Application Due date:10/19/2016 -->

<!DOCTYPE html>
<!-- Student Name:   -->
<html lang="en">
  <head>
    <title>A Weather Web Application</title>
    <meta charset="utf-8"/>
    <script type="text/javascript" src="weather.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body onload="initialize();" style="background-color:powderblue;"> <!-- change the background color -->
  <div align="center">
    <h4>Last Name: Rajamani &nbsp; First Name: Karthikeyan</h4>
  <h4>UTA Id: 1001267157  Project1,Weather web Application, Due date:10/19/2016</h4>
  <h4>Web Data Management-Fall 2016</h4>
   </div>
    <form>
       <label>City: <input type="text" id="form-input" align="center" /></label>
       <input type="button" onclick="sendRequest();" value="Display Info" align="center"/><br/><br/>
       <label> <strong>Enter the city for the weather report and click on Display Info</strong></label>
    </form>
    <div id="output"  align="center">&nbsp; 
    <label id="lblCity"></label> <!-- labels for displaying the corresponding json vales -->
    <label id="lbllon"></label>
    <label id="lbllat"></label>
   <label id="lblsunrise"></label>
   <label id="lblsunset"></label>
   <label id="lblpressure"></label>
   <label id="lblhumidity"></label>
   <label id="lbltemp"></label>
   <label id="lblmintemp"></label>
   <label id="lblmaxtemp"></label>
   <label id="lblvisibilty"></label>
   <label id="lblclouds"></label>
   <label id="lblsuggest"></label>
   <img id="sugimage"/> <!-- image tag to hold the image -->
   </div>
   </body>
</html>
