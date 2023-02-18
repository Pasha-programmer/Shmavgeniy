
// Get position of the device, that using your site
function getCurrentPosition() {

    let coordinate;
    let isError = false;

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        coordinate = latitude;
        coordinate = longitude;
        //coordinate = { latitude, longitude };
    }

    function error() {
        isError = true;
    }
    navigator.geolocation.getCurrentPosition(success, error);

    console.log(isError ? null : coordinate)

    return isError ? null : coordinate;
}

console.log(getCurrentPosition())

// Get from degrees to radians
function convertDeg2rad(num) {
    return num * Math.PI / 180;
}

// Get distanse between two coordinates to kilometers.
function distance(lat_1, lon_1, lat_2, lon_2) {

    let radius_earth = 6371; // Радиус Земли

    let lat_1R = convertDeg2rad(lat_1),
        lon_1R = convertDeg2rad(lon_1),
        lat_2R = convertDeg2rad(lat_2),
        lon_2R = convertDeg2rad(lon_2);

    let d = 2 * radius_earth * Math.asin(Math.sqrt(Math.sin((lat_2R - lat_1R) / 2) ** 2 + Math.cos(lat_1R) * Math.cos(lat_2R) * Math.sin((lon_2R - lon_1R) / 2) ** 2));

    return d.toFixed(2);
}

