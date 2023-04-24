$(function () {
  let amenities = {};
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenities[$(this).data("id")] = $(this).data("name");
    } else {
      delete amenities[$(this).data("id")];
    }
    if (Object.values(amenities).length > 0) {
      $(".amenities h4").text(Object.values(amenities).join(", "));
    } else $(".amenities h4").html("&nbsp");
  });
});
