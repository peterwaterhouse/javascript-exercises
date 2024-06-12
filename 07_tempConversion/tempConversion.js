const convertToCelsius = function(num) {
  celcius = (num-32)*5/9;
  return round((celcius*10)/10, 1);
};

const convertToFahrenheit = function(num) {
  fahrenheit = (((9/5)*num)+32);
  return round((fahrenheit*10)/10, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
