$(document).ready(function() {
    $(".image-slider img:first").fadeIn(1000);
    setInterval(function() {
        $(".image-slider img:first").fadeOut(1000).next().fadeIn(1000).end().appendTo(".image-slider");
    }, 3000);
});