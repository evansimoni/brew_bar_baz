$(document).ready(function(){
var submitLocality = function(e) {
  e.preventDefault();
  submitLocal = $.ajax({
    url: "/",
    type: "POST",
    data: $("form").serialize
  })
  submitLocal.done(function(response) {
    console.log('params delivered to controller') // WTFFFFFFFFF^^^^^^
  })
}

var loadBeerMenu = function(e) { // not triggering this function on click
  console.log(e)
  var beerId = $(this).parents(".section group").attr("id"); //grab beer id from the section group class
  e.preventDefault();
  loadBeer = $.ajax({
    url: "beers/" + beerId,
    type: "PUT",
  })
  loadBeer.done(function(response) {
    console.log('bout to load beer')
  })
}

var bindEvent = function () {
  $('#locality-button').on("click", submitLocality)
  // Event delegation on maincontent container
  $('#maincontent').on("click", "beer_menu", loadBeerMenu) // event binder not working
}

bindEvent();
});
