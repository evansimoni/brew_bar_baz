navigator.geolocation.getCurrentPosition( function(position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    $('.coords').text("Your coordinates are " + latitude + ", " + longitude)
});

// function myCoords() {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
// }

////////////GEOLOCATION////////////////
navigator.geolocation.getCurrentPosition( function(position) {
  initialize(position.coords.latitude,position.coords.longitude)
});

////////////GOOGLE MAPS////////////////
function initialize(lat,long) {
  var userLocation = new google.maps.LatLng(lat, long)
  var findBtn = document.getElementById('find-me')
  var zoomBtn = document.getElementById('zoom-in')

  var mapOptions = {
    center: userLocation,
    zoom: 2
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  google.maps.event.addDomListener(findBtn, 'click', function() {
    placeMarker(userLocation,map)
    })

  google.maps.event.addDomListener(zoomBtn, 'click', function() {
      map.setZoom(11);
    });

}

function placeMarker(location,map,markers) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "you are here"
  })
}

google.maps.event.addDomListener(window, 'load', initialize)
myCoords(position)
