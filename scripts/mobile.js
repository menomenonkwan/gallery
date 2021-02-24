$(document).ready(function(){
  $(".burger").click(function(){
    $(".burger-middle").toggleClass("open");
    $(".sidebar nav ul").slideToggle("slow");
    $(".social").slideToggle("slow");
    $('footer').slideToggle("slow");
  });
});