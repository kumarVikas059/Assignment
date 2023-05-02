function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
 
}
const temperatureInCelsius = 37;
const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(temperatureInFahrenheit); 
