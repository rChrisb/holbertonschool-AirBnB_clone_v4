$(document).ready(function () {
  $("button").click(function () {
    // Get the list of checked amenities
    var amenityIds = [];
    $("input[type=checkbox]:checked").each(function () {
      amenityIds.push($(this).data("id"));
    });

    console.log("Sending search request with amenities:", amenityIds);

    // Send a POST request to places_search with the list of checked amenities
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://0.0.0.0:5001/api/v1/places_search",
      data: JSON.stringify({
        amenities: amenityIds,
      }),
      success: function (data) {
        console.log("Search successful. Found", data.length, "places.");

        // Clear the existing places
        $("section.places").empty();

        // Loop through the results and create article tags for each place
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
});
