// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

// let mapToken = "mapToken";
// console.log(mapToken);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [79.0882, 21.1458], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10 // starting zoom
});