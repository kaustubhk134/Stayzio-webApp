// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

// let mapToken = "mapToken";
// console.log(mapToken);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10, // starting zoom
    style: 'mapbox://styles/mapbox/outdoors-v12'
});

// popup with HTML content
const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`);

// marker and attach popup
new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)  // Listing.geometry.coordinates
  .setPopup(popup)
  .addTo(map);
