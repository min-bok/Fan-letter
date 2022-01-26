const API_KEY = '58df8615efe73067fbead169c0274ab8';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
}

function onGeoError() {
    alert(`Can't find you, No weather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)