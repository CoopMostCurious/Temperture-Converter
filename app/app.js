(function() {
    'use strict';
    var celciusInput = document.querySelector('#celcius > input');
    var fahInput = document.querySelector('#fahrenheit > input');
    var kelvinInput = document.querySelector('#kelvin > input');

    function roundNumbers(number) {
        return Math.round(number*100)/100;
    }

    function updateCelcius() {
        var cTemp = parseFloat(celciusInput.value);
        var fTemp = (cTemp * (9/5)) + 32;
        var kTemp = cTemp + 273.15;
        fahInput.value = roundNumbers(fTemp);
        kelvinInput.value = roundNumbers(kTemp);
    }

    function updateFahrenheit() {
        var fTemp = parseFloat(fahInput.value);
        var cTemp = (fTemp - 32) * (5/9);
        var kTemp = fTemp + 459.67 * 5/9;
        celciusInput.value = roundNumbers(cTemp);
        kelvinInput.value = roundNumbers(kTemp);
    }

    function updateKelvin() {
        var kTemp = parseFloat(kelvinInput.value);
        var cTemp = kTemp - 273.15;
        var fTemp = 9/5 * (kTemp - 273.15) + 32;
        celciusInput.value = roundNumbers(cTemp);
        fahInput.value = roundNumbers(fTemp);
    }

    celciusInput.addEventListener('input', updateCelcius);
    fahInput.addEventListener('input', updateFahrenheit);
    kelvinInput.addEventListener('input', updateKelvin);
})();