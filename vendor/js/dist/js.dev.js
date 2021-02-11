"use strict";

new WOW().init();
$(".wallpaper").vegas({
  slides: [{
    src: "https://colorlib.com/preview/theme/thebarber/img/banner/banner.png"
  }, {
    src: "https://images.unsplash.com/photo-1554162404-d2feb0b28d86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
  }, {
    src: "https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }, {
    src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }]
}); // $('.wallpaper, .wallpaper .ha, #appoint').height($(window).height());

$(".navbar-light .navbar-nav .nav-link").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("id");
  $(document).scrollTop($("#".concat(id).split("-")[0].toString()).position().top - 61.5);
});
$(window).scroll(function () {
  if ($(this).scrollTop() + $("nav").innerHeight() >= $("#about").position().top && $(this).scrollTop() + $("nav").innerHeight() <= $("#service").position().top) {
    $("#about-link").addClass('active').parent().siblings().children().removeClass('active');
  } else if ($(this).scrollTop() + $("nav").innerHeight() >= $("#service").position().top && $(this).scrollTop() + $("nav").innerHeight() <= $("#gallery").position().top) {
    $("#service-link").addClass('active').parent().siblings().children().removeClass('active');
  } else if ($(this).scrollTop() + $("nav").innerHeight() >= $("#gallery").position().top && $(this).scrollTop() + $("nav").innerHeight() <= $("#cutter").position().top) {
    $("#gallery-link").addClass('active').parent().siblings().children().removeClass('active');
  } else if ($(this).scrollTop() + $("nav").innerHeight() >= $("#cutter").position().top && $(this).scrollTop() + $("nav").innerHeight() <= $("#contact").position().top) {
    $("#cutter-link").addClass('active').parent().siblings().children().removeClass('active');
  } else if ($(this).scrollTop() + $("nav").innerHeight() >= $("#contact").position().top) {
    $("#contact-link").addClass('active').parent().siblings().children().removeClass('active');
  } else {
    $("#home-link").addClass('active').parent().siblings().children().removeClass('active');
  }

  if ($(this).scrollTop() >= 500) {
    $('nav').css('background-color', '#4a3600');
    $('.navbar-brand img').css('max-width', '50%');
    $("#to-top").fadeIn();
  } else {
    $('nav').css('background-color', '');
    $('.navbar-brand img').css('max-width', '');
    $("#to-top").fadeOut();
  }
});
$("#to-top").on("click", function () {
  $(document).scrollTop(0);
});
$(".cash").click(function (e) {
  e.preventDefault();
  $("#appoint").fadeIn(300, function () {});
  $("body").css("overflow", "hidden");
});
$(".appointbg").click(function () {
  $("#appoint").fadeOut(300, function () {});
  $("body").css("overflow", "");
});
$('#datepicker').datepicker({
  uiLibrary: 'bootstrap4'
});
$('#timepicker').timepicker({
  uiLibrary: 'bootstrap4'
});
$('#chservice').niceSelect();
$('#chbarber').niceSelect(); // $('.navbar-nav li .after').on('click', function(){
//     $(this).addClass('active').parent().siblings().children().removeClass('active');
// })

$('.carousel').carousel({
  interval: 3000
});