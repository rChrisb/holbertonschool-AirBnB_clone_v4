const $ = window.$;

$(document).ready(function () {
  $.get("http://127.0.0.1:5001/api/v1/status/", function (data) {
    if (data.status === "OK") {
      $("#api_status").css("background-color", "#ff545f");
    } /* else {
      $("#api_status").removeClass("available");
    } */
  });

  $('input[type="checkbox"]').change(function () {
    const amenities = [];
    $('input[type="checkbox"]:checked').each(function () {
      amenities.push($(this).attr("data-name"));
    });
    $(".amenities h4").text(amenities.join(", "));
  });
});
