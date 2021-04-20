$(document).ready(function () {
  $('.category li ').click(function () {
    $('.category li ').removeClass('active')
    $(this).toggleClass('active')
  })
})
