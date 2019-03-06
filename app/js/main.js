let activeOne = $('#navbarNav').find('a.active');

$('a.item').hover(function () {
  activeOne.removeClass('active')
  $(this).addClass('active')
}, function () {
  console.log('hover out')
  $(this).removeClass('active')
  activeOne.addClass('active')
})

// Font Async
$(document).ready(function () {
  WebFontConfig = {
    google: {
      families: ['Montserrat:300,400,500,600,700,800,900', 'Poppins:300,400,700,900']
    }
  };
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

});


$(document).ready(function () {
  $('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 6000);
  });
});

AOS.init({
  duration: 800,
  easing: 'slide'
});

(function ($) {

  "use strict";


  var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  var burgerMenu = function () {

    $('.js-burgue-nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }
    });
  };
  burgerMenu();

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function () {

    $(document).click(function (e) {
      var container = $("#aside, .js-burgue-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {

        if ($('body').hasClass('offcanvas')) {

          $('body').removeClass('offcanvas');
          $('.js-burgue-nav-toggle').removeClass('active');

        }

      }
    });

    $(window).scroll(function () {
      if ($('body').hasClass('offcanvas')) {

        $('body').removeClass('offcanvas');
        $('.js-burgue-nav-toggle').removeClass('active');

      }
    });

  };
  mobileMenuOutsideClick();


  var contentWayPoint = function () {
    var i = 0;
    $('.ftco-animate').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function () {

          $('body .ftco-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });

        }, 100);

      }

    }, { offset: '95%' });
  };
  contentWayPoint();

})(jQuery);

