$(document).ready(function () {
   $(".news__items .news__card").click(function () {
     $(".news__items .news__card").not($(this)).removeClass("active");
     $(this).toggleClass("active");
   });
 });