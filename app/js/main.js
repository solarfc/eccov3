"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      slow scroll
   */
  var $root = $('html, body'),
      href;
  $('figure.order a, .banner__content a').on('click', function () {
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
      for one day
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 1,
      period = document.querySelectorAll('p.stock output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate();
  day = day < 10 ? "0".concat(day) : day;
  month = tomorrow.getMonth() + 1;
  month = month < 10 ? "0".concat(month) : month;
  year = tomorrow.getFullYear().toString().slice(2);

  for (var j = 0; j < period.length; j++) {
    period[j].innerHTML = "".concat(day, ".").concat(month, ".").concat(year);
  }

  $('span.year').text(tomorrow.getFullYear());
  /*
      parallax
   */

  var data = [{
    elem: 'parallax1',
    start: 'transform: translateY(-15px)',
    finish: 'transform: translateY(200px)'
  }, {
    elem: 'parallax2',
    start: 'transform: translateY(0px)',
    finish: 'transform: translateY(400px)'
  }, {
    elem: 'parallax3',
    start: 'transform: translateY(0px)',
    finish: 'transform: translateY(500px)'
  }, {
    elem: 'parallax4',
    start: 'transform: translateY(0px)',
    finish: 'transform: translateY(400px)'
  }, {
    elem: 'parallax5',
    start: 'transform: translateY(0px)',
    finish: 'transform: translateY(300px)'
  }],
      hf = myHeight / 4,
      hs = hf * 2,
      func = function func(datas) {
    datas.forEach(function (elem) {
      var el = [].slice.call(document.getElementsByClassName(elem.elem));
      el.forEach(function (block) {
        block.setAttribute("data-".concat(hs, "-top"), elem.start);
        block.setAttribute("data-".concat(hf, "-top"), elem.finish);
      });
    });
  };

  func(data);

  if (myWidth > 980) {
    var parallax = skrollr.init({
      forceHeight: false
    });
  }
  /*
      fancybox loop
   */


  $.fancybox.defaults.loop = true;
  /*
      gallery slider
   */

  $('.gallery__content-slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 300,
    arrows: true,
    prevArrow: $('.gallery-prev'),
    nextArrow: $('.gallery-next'),
    dots: true
  });
  /*
      advantages switch photo
   */

  $('.advantages__content-switch figure').on('click', function () {
    var activeColor = $(this).attr('class'),
        advFigure = document.querySelectorAll('.advantages__content-img figure p');
    console.log(advFigure);

    if ($(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      $('.advantages__content-switch figure').removeClass('active');
      $(this).addClass('active');
      $('.advantages__content-img img').removeClass('active');
      $('.advantages__content-img img.' + activeColor).addClass('active'); // for(let j = 0; j < advFigure.length; j++) {
      //     if(activeColor === 'white') {
      //         advFigure[0].innerHTML = 'Белый классический цвет не выходит из моды. Под эту модель легко подобрать удачный наряд.';
      //         advFigure[1].innerHTML = 'Кеды из натуральной кожи обеспечивают максимальный комфорт при ходьбе.';
      //         advFigure[2].innerHTML = `Здесь нет лишних элементов декора, только декоратив&shy;ные строчки и белая подо&shy;шва.`
      //     } else if (activeColor === 'gold') {
      //         advFigure[0].innerHTML = `Оригинальные женские кеды в новом цвете пудра-перла-${'\n'}мутр стали настоящим ориентиром стиля.`;
      //         advFigure[1].innerHTML = `В кедах из мягкой натураль-${'\n'}ной кожи даже длительная прогулка станет удовольствием.`;
      //         advFigure[2].innerHTML = `Дизайн и эстетику пары выгодно дополняет прочная белая подошва из полиуретана.`;
      //     } else if (activeColor === 'pink') {
      //         advFigure[0].innerHTML = `Розовые кеды из натуральной кожи не просто выглядят женственно, но и обеспечивают продолжительное удобство.`;
      //         advFigure[1].innerHTML = `Будьте смелее при комбинировании образов с этой парой – и вам не будет равных.`;
      //         advFigure[2].innerHTML = `Полиуретановая подошва в цвет обуви сливается с ней воедино. Невысокий подъем ниже 30 мм. `;
      //     }
      // }
    }
  });
  /*
      catalog change color
   */

  var catalogTitle = document.querySelector('.catalog__block.sneakers h3'),
      catalogBigImage = document.querySelector('.catalog__block.sneakers img.boot'),
      catalogPhoto = document.querySelector('.catalog__block.sneakers .photo'),
      switchColor = $('.catalog__block.sneakers .color figure span, .banner__content a'),
      catalogColor = $('.catalog__block.sneakers .color figure span'),
      catalogLink = $('.catalog__block.sneakers .photo a'),
      catalogSmallImg = $('.catalog__block.sneakers .photo a img'),
      changeOpacity = function changeOpacity() {
    catalogTitle.style.opacity = '0';
    catalogBigImage.style.opacity = '0';
    catalogPhoto.style.opacity = '0';

    var show = function show() {
      catalogTitle.style.opacity = '1';
      catalogBigImage.style.opacity = '1';
      catalogPhoto.style.opacity = '1';
    };

    setTimeout(show, 500);
  };

  switchColor.on('click', function () {
    var activeColor = $(this).attr('class');
    console.log(activeColor);

    if ($(this).hasClass('active')) {
      $(this).addClass('active');
    } else {
      switchColor.removeClass('active');
      catalogColor.removeClass('active');
      $('.catalog__block.sneakers .color figure span.' + activeColor).addClass('active');
      $(this).addClass('active');

      var change = function change() {
        if (activeColor === 'white') {
          catalogTitle.innerHTML = 'leisure white';
        } else if (activeColor === 'gold') {
          catalogTitle.innerHTML = 'leisure powder';
        } else if (activeColor === 'pink') {
          catalogTitle.innerHTML = 'leisure pink';
        }

        catalogBigImage.src = "img/catalog/".concat(activeColor, ".png");

        for (var _j = 0; _j < catalogLink.length; _j++) {
          catalogLink[_j].href = "img/catalog/".concat(activeColor, "/").concat(_j + 1, ".jpg");
          catalogSmallImg[_j].src = "img/catalog/".concat(activeColor, "/").concat(_j + 1, ".jpg");
        }
      };

      setTimeout(change, 400);
      changeOpacity();
    }
  }); // $('.catalog__block.sneakers .catalog__block-content .color figure span').on('click', function () {
  //     let activeColor = $(this).attr('class');
  //     if($(this).hasClass('active')) {
  //         $(this).addClass('active');
  //     } else {
  //         $('.catalog__block.sneakers .catalog__block-content .color figure span').removeClass('active');
  //         $(this).addClass('active');
  //         $('.catalog__block.sneakers .catalog__block-content__img img.boot').css({
  //             opacity: '0'
  //         });
  //         $('.catalog__block.sneakers .catalog__block-content__img .photo a').css({
  //             opacity: '0'
  //         });
  //         $('.catalog__block.sneakers .catalog__block-top h3').css({
  //             opacity: '0'
  //         });
  //         let change = function () {
  //             $('.catalog__block.sneakers .catalog__block-content__img img.boot').attr('src', `img/catalog/${activeColor}.png`);
  //             let a = $('.catalog__block.sneakers .catalog__block-content__img .photo a');
  //             let smallImg = $('.catalog__block.sneakers .catalog__block-content__img .photo a img');
  //             for(let i = 0; i < a.length; i++) {
  //                 a[i].href = `img/catalog/${activeColor}/${i + 1}.jpg`;
  //                 smallImg[i].src = `img/catalog/${activeColor}/${i + 1}.jpg`;
  //             }
  //             if(activeColor === 'white') {
  //                 $('.catalog__block.sneakers .catalog__block-top h3').text('leisure white');
  //             } else if (activeColor === 'gold') {
  //                 $('.catalog__block.sneakers .catalog__block-top h3').text('leisure powder');
  //             } else if (activeColor === 'pink') {
  //                 $('.catalog__block.sneakers .catalog__block-top h3').text('leisure pink');
  //             }
  //         };
  //         let show = function () {
  //             $('.catalog__block.sneakers .catalog__block-content__img img.boot').css({
  //                 opacity: '1'
  //             });
  //             $('.catalog__block.sneakers .catalog__block-content__img .photo a').css({
  //                 opacity: '1'
  //             });
  //             $('.catalog__block.sneakers .catalog__block-top h3').css({
  //                 opacity: '1'
  //             });
  //         };
  //         setTimeout(change, 400);
  //         setTimeout(show, 500);
  //     }
  // });

  /*
      Style For Select Box
  */

  $(function () {
    $('select').styler({
      selectSmartPositioning: false
    });
  });
  /*
      review style
   */

  $('.review__content .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 300,
    arrows: true,
    prevArrow: $('.review-prev'),
    nextArrow: $('.review-next'),
    dots: true
  });
  /*
      the same height
   */

  $(function () {
    $('.review__content .slider .item figure p').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
    $('.video__content-text figure p').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
  });
  /*
      political
   */

  var bodyFilter = document.querySelector('.body__filter'),
      politicalOpen = document.querySelector('p.politic'),
      political = document.querySelector('.political'),
      politicalClose = document.querySelector('img.close'),
      closePolitical = function closePolitical() {
    document.querySelector('html').style.overflowY = 'scroll';
    bodyFilter.style.zIndex = '-5';
    political.style.cssText = "transform: translate(-50%, -50%) rotateX(-90deg);\n        z-index: -5;";
  };

  politicalOpen.addEventListener('click', function () {
    document.querySelector('html').style.overflowY = 'hidden';
    bodyFilter.style.zIndex = '999';
    political.style.cssText = "transform: translate(-50%, -50%) rotateX(0deg);\n        z-index: 9999;";
  });
  politicalClose.addEventListener('click', closePolitical);
  bodyFilter.addEventListener('click', closePolitical);
  /*
      change href on mobile
   */

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    $('.banner__content a').attr('href', '#size'); // document.querySelector('a.lake').href = '#formlake';
    // document.querySelector('a.lou').href = '#formlou';
  }
};