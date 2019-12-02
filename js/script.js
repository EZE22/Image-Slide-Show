$(function() {
  // jQuery goes here...

  //****jQuery Methods for Filtering****
  //$("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").filter(function (index) {
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  //$("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)"); //this will select the second element from the back

  // $("li").not(function (index) {
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  //****jQuery Methods for Traversal****
  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");



  //To get all the input elements of type text
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");

  //Using CSS Selectors in jQuery
  //$("p").css("background-color", "green");
  //$(".red-box").css("background-color", "yellow");
  //$("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("p:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");


  //Delaying using callback funcitons
  // $(".red-box").fadeTo(1000, 0, function() {
  //   $(".green-box").fadeTo(1000, 0, function() {
  //     $(".blue-box").fadeTo(1000, 0);
  //   });
  // });

  // $(".red-box").fadeTo(1000, 0, function(){
  //   alert("This is the callback funciton: Animation finished...")
  // })


  //Delaying animations using method channing
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  //custome animation
  // $(".blue-box").animate({
  //   "margin-left": "+=200px"
  // }, 1000, "linear");

  //More Customer Animations
  // $("p").animate({
  //   fontSize: "20px"
  // }, 1000);

  // $(".blue-box").animate({
  //   marginLeft: "200px",
  //   opacity: "0",
  //   height: "50px",
  //   width: "50px",
  //   marginTop: "25px"
  // }, 1000);

  // $(".blue-box").slideToggle(2000);
  // $("p").hide(1000);
  // $("p").slideDown(1000);



  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").fadeTo(1000, 0.5);
  // $(".blue-box").fadeTo(1000, 0.8);

  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();
});
