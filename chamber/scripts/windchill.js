var temp= 27+32;
var windSpeed= 11*0.621371;

if(temp <= 50 && windSpeed > 3) {
  var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16));
var windChill= Math.round(windChill);
  document.getElementById("windChill").innerHTML= windChill;
} else {
  let windChill = "N/A";
  document.getElementById("windChill").innerHTML= windChill;
}

// Temperature converted Degrees Celcius and Speed to km/hr