 
<?php
// Last Name: Rajamani
// First Name: Karthikeyan
// UTA Id: 1001267157
// Project1-Weather web Application Due date:10/19/2016
  header("Content-Type: application/json");
  $host = "http://api.openweathermap.org/data/2.5/weather";
  $query = $_SERVER['QUERY_STRING'];
  $ch = curl_init($host . "?" . $query);
  curl_exec($ch);
  curl_close($ch);
?>
