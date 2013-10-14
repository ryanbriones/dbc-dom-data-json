$(document).ready(function () {
  $("#roll-form").submit(function(event) {
    event.preventDefault();

    var url = $(this).attr("action");
    var data = $(this).serialize();

    $.post(url, data, function(response) {
      var html = '<img src="/' + response.roll + '.png" />';
      $("#die").html(html)
    }, "json");
  })
});
