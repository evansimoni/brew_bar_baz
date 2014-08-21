function bindEvent() {
var localityButton = $('#locality-button').on("click", submitLocality)
}

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

bindEvent();
