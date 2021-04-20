
$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger__menu').slideToggle(300)
    $('.burger').toggleClass('burger__active')
  })// click on burger

  $('.portfolio').hover(function () {
    $('.portfolio-menu').slideDown(200)
  }, function () {
    $('.portfolio-menu').slideUp(200)
  }
  )
  $('.blog').hover(function () {
    $('.blog-menu').slideDown(200)
  }, function () {
    $('.blog-menu').slideUp(200)
  }
  )
  $('.links li').click(function () {
    $('.link').removeClass('choosen')
    $(this).find('.link').toggleClass('choosen')
  })
  $('.email').focus(function () {
    $(this).parent().find('.email-text').addClass('active')
  })
  $('.email').blur(function () {
    $(this).parent().find('.email-text').removeClass('active')
  })
})
