function onGeoOk(position) {
    console.log(position);
}

function onGeoOk() {
    alert(`Can't find you, No weather for you.`);

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoOk)