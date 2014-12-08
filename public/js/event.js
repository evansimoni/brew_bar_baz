$(document).ready(function(){

  var submitLocality = function(e) {
    // e.preventDefault();
    submitLocal = $.ajax({
      url: "/",
      type: "POST",
      data: $("form").serialize
    })
    .done(function(response) {
      console.log('params delivered to controller');
    });
  }

var bindEvent = function () {
  $('#mainform').on("submit", submitLocality)
}

bindEvent();

});
