(function() {
    'use strict';
    const celciusInput = document.querySelector('#celcius > input');
    const fahInput = document.querySelector('#fahrenheit > input');
    const kelvinInput = document.querySelector('#kelvin > input');

    function updateCelcius() {
        var cTemp = parseFloat(celciusInput.value);
        var fTemp = (cTemp * (9/5)) + 32;
        var kTemp = cTemp + 273.15;
        fahInput.value = fTemp;
        kelvinInput.value = kTemp;
    }

    function updateFahrenheit() {
        var fTemp = parseFloat(fahInput.value);
        var cTemp = (fTemp - 32) * (5/9);
        var kTemp = fTemp + 459.67 * 5/9;
        celciusInput.value = cTemp;
        kelvinInput.value = kTemp;
    }

    function updateKelvin() {
        var kTemp = parseFloat(kelvinInput.value);
        var cTemp = kTemp - 273.15;
        var fTemp = 9/5 * (kTemp - 273.15) + 32;
        celciusInput.value = cTemp;
        console.log(celciusInput.value);
        fahInput.value = fTemp;
    }

    celciusInput.addEventListener('input', updateCelcius);
    fahInput.addEventListener('input', updateFahrenheit);
    kelvinInput.addEventListener('input', updateKelvin);
})();