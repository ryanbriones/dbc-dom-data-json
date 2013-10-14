$(document).ready(function () {
  $("#roll-form").submit(function(event) {
    event.preventDefault();

    var url = $(this).attr("action");
    var data = {
      value: $(this).data("roll")
    }

    $.post(url, data, function(response) {
      $("#die").html(response);
    })
  })
});
