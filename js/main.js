"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log('width = ' + myWidth, '\n', 'height = ' + myHeight);

window.onload = function () {
  /*
      slow scroll
   */
  var $root = $('html, body'),
      href;
  $('nav a, a.order, figure.miniature a, .choose__content-img a').on('click', function () {
    href = $(this).attr('href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 800, function () {
      window.location.hash = href;
    });
    return false;
  });
  /*
      increase today date
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 1,
      stock = document.querySelectorAll('p.stock span');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate();

  if (day < 10) {
    day = '0' + day;
  }

  month = tomorrow.getMonth() + 1;

  if (month < 10) {
    month = '0' + month;
  }

  year = tomorrow.getFullYear();

  for (var _i = 0; _i < stock.length; _i++) {
    stock[_i].innerText = day + '.' + month + '.' + year;
  }
  /*
      year in copyright
   */


  document.querySelector('p.copyright').querySelector('span').innerText = tomorrow.getFullYear();
  /*
      fancybox loop
   */

  $.fancybox.defaults.loop = true;
  /*
      change size
   */

  var activeSize = $('.size figure span');
  activeSize.on('click', function () {
    activeSize.removeClass('activeSize');
    $(this).addClass('activeSize');
  });
  /*
      review slider
   */

  var reviewSlider = $('.review__content-slider'),
      slickCenter;
  reviewSlider.on('init', function (slick, event) {
    slickCenter = $('.slick-center');
    slickCenter.find('section').css({
      marginLeft: 'auto',
      marginTop: 70
    });
    slickCenter.prev().find('section').css({});
  });
  reviewSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 0,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    prevArrow: $('.prev__arrow'),
    nextArrow: $('.next__arrow'),
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }]
  });
  reviewSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1) || currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      slickCenter = $('.slick-center').prev();
    } else if (currentSlide === nextSlide) {
      slickCenter = $('.slick-center');
    } else {
      slickCenter = $('.slick-center').next();
    }

    slickCenter.find('section').css({
      marginLeft: 'auto',
      marginTop: 70
    });
    slickCenter.prev().find('section').css({
      marginLeft: 0,
      marginTop: 0
    });
  });
  /*
      the same height
   */

  $(function () {
    $('.review__content-slider__item section p').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
  });
  /*
      feedback
   */

  var showFeedback = document.querySelector('p.send'),
      bodyFilter = document.querySelector('.body__filter'),
      feedback = document.querySelector('.feedback'),
      closeFeedback = document.querySelector('span.close'),
      formTitle = $('.feedback p'),
      inputValue = $('.feedback input'),
      textareaValue = $('.feedback textarea'),
      formButton = $('.feedback button'),
      changeForm = function changeForm() {
    inputValue.val('');
    textareaValue.val('');
    formTitle.text('оставьте ваш отзыв').css({
      position: 'static',
      transform: 'none'
    });
    inputValue.css({
      opacity: 1
    });
    textareaValue.css({
      opacity: 1
    });
    formButton.css({
      opacity: 1,
      transition: 'all 0.55s ease-in-out'
    });
  },
      closesFeedback = function closesFeedback() {
    document.querySelector('html').style.overflowY = 'scroll';
    bodyFilter.style.cssText = 'opacity: 0; z-index: -5';
    feedback.style.cssText = 'z-index: -5; transform: translate(-50%, -50%) rotateX(-90deg)';
    setTimeout(changeForm, 500);
  };

  showFeedback.addEventListener('click', function () {
    document.querySelector('html').style.overflowY = 'hidden';
    bodyFilter.style.cssText = 'opacity: 0.902; z-index: 999';
    feedback.style.cssText = 'z-index: 9999; transform: translate(-50%, -50%) rotateX(0deg)';
  });
  inputValue.change(function () {
    inputValue.val();
  });
  textareaValue.change(function () {
    textareaValue.val();
  });
  formButton.on('click', function () {
    if (inputValue.val() !== '' && textareaValue.val() !== '') {
      inputValue.css({
        opacity: 0
      });
      textareaValue.css({
        opacity: 0
      });
      formButton.css({
        opacity: 0,
        transition: 'none'
      });
      formTitle.text('Спасибо за Ваш отзыв').css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      });
      return false;
    }
  });
  bodyFilter.addEventListener('click', closesFeedback);
  closeFeedback.addEventListener('click', closesFeedback);
  /*
      change href on mobile
   */

  if (/iPhone|iPod|Android/i.test(navigator.userAgent)) {
    document.querySelector('a.grande').href = '#formgrande';
    document.querySelector('a.lake').href = '#formlake';
    document.querySelector('a.lou').href = '#formlou';
  }
};