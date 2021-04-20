$(document).ready(function () {

    $('.front').hover(function () {
        $('.name').addClass('animate__animated animate__zoomInUp')
        $('.position').addClass('animate__animated animate__zoomInUp')

    }, function () {
        $('.name').removeClass('animate__animated animate__zoomInUp')
        $('.position').removeClass('animate__animated animate__zoomInUp')
    });




});
