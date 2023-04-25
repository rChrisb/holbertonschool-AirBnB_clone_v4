$(document).ready(function () {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:5004/api/v1/places_search",
    data: JSON.stringify({}),
    success: function (data) {
      $.each(data, function (index, place) {
        var article = $("<article></article>");
        var title = $("<div class='title'></div>").html(
          "<h2>" +
            place.name +
            "</h2><div class='price_by_night'>" +
            "$" +
            place.price_by_night +
            "</div>"
        );
        var information = $("<div class='information'></div>").html(
          "<div class='max_guest'>" +
            place.max_guest +
            " Guests</div><div class='number_rooms'>" +
            place.number_rooms +
            " Bedrooms</div><div class='number_bathrooms'>" +
            place.number_bathrooms +
            " Bathrooms</div>"
        );
        var description = $("<div class='description'></div>").html(
          place.description
        );
        $(article).append(title);
        $(article).append(information);
        $(article).append(description);
        $("SECTION.places").append(article);
      });
    },
  });
});
