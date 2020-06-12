function initMap() {
var location = {lat: 39.907690, lng: -75.278040};
var map = new google.maps.Map(document.getElementById("map"), {
zoom: 15, 
center: location
});

var marker = new google.maps.Marker({
position: location,
map: map
});
}

