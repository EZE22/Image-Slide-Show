$(function() {
  let galleryImage = $(".gallery").find("img").first();
  let images = [
      "images/laptop-mobile_small.jpg",
      "images/laptop-on-table_small.jpg",
      "images/people-office-group-team_small.jpg"
  ];

  let imageIndex = 0;
  setInterval(function () {
    imageIndex = (imageIndex + 1) % images.length; //sequence 0, 1, 2, 0, 1 ,2 ....
    galleryImage.fadeOut(function () {
      $(this).attr("src", images[imageIndex]);
      $(this).fadeIn();
    })
    console.log(galleryImage.attr("src"));
  }, 2000);

});
