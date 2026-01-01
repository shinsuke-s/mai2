$(function () {
  function revealOnScroll() {
    $('.reveal').each(function () {
      var $el = $(this);
      if ($el.hasClass('active')) return;
      var top = $el.offset().top;
      var scroll = $(window).scrollTop();
      var windowH = $(window).height();
      if (scroll + windowH - 80 > top) {
        $el.addClass('active');
      }
    });
  }

  revealOnScroll();
  $(window).on('scroll', revealOnScroll);

  $('.faq-q').on('click', function () {
    var $item = $(this).closest('.faq-item');
    $item.toggleClass('open');
    $item.find('.faq-a').stop(true, true).slideToggle(200);
  });

  $('a[href^="#"]').on('click', function (e) {
    var target = $($(this).attr('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 500);
    }
  });
});
