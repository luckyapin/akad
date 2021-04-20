$(document).ready(function () {
    $('.email').focus(function () {
        $(this).parent().find('.email-text').addClass('active')
    });
    $('.email').blur(function () {
        $(this).parent().find('.email-text').removeClass('active')
    });
});