// slick
// $(document).ready(function(){
//   $('.single').slick({
//     autoplay: true,
//     dots: false,
//     slidesToShow: 3,
//     infinite: true,
//     centerMode: true,
//     speed: 100,
//     slidesToScroll: 3,
//     dotsClass: 'slide-dots'
//   });
// });

// modal.js
// $(function(){
//   $('.js-modal-open').on('click',function(){
//       $('.js-modal').fadeIn();
//       return false;
//   });
//   $('.js-modal-close').on('click',function(){
//       $('.js-modal').fadeOut();
//       return false;
//   });
// });

$(function(){
  // PC, SP時のヘッダーの高さ調節
    $(window).on('load resize', function() {
      $(document).ready(function () {
        if (window.matchMedia( '(max-width: 767px),(min-width: 768px)' ).matches) {
          hsize = $('header').height();
          $(".ly_content").css("padding-top", hsize + "px");
        }else {
          $(".ly_content").removeAttr('style');
        }
      });
    });

  // SPメニュー
    $('.nav_buttom').click(function () {
      $(this).toggleClass('active');
      $('.nav_area_bg').fadeToggle();
      $('nav').toggleClass('open');
    })
    $('.nav_area_bg').click(function () {
      $(this).fadeOut();
      $('.menuIcon').removeClass('active');
      $('.nav_buttom').removeClass('active');
      $('nav').removeClass('open');
    });
    $('.nav_area_sp nav ul li a').click(function () {
      $('.menuIcon').removeClass('active');
      $('.nav_buttom').removeClass('active');
      $('nav').removeClass('open');
    });
  
  // スクロール時に追従分の高さを取る
    let headerNav = $(".nav.forPc").outerHeight();
    let headerHight = $("header").outerHeight();
    $("a").click(function() {
      if (window.matchMedia( '(min-width: 768px)' ).matches) {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "body" : href);
        let position = target.offset().top - headerNav;
        $("html, body").animate({ scrollTop: position }, 500, "swing");
      } else {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "body" : href);
        let position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, 500, "swing");
      }
    });
  
  // スムーススクロール
    let topScroll = $('.topScroll');
    topScroll.hide();
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
        topScroll.fadeIn("400");
      } else {
        topScroll.fadeOut("400");
      }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight() + $(".nav.forPc").height();//止めたい位置
      if (scrollHeight - scrollPosition <= footHeight ) {
        topScroll.css({
          "position": "absolute",
          "bottom": 90
        });
        if ( scrollHeight - scrollPosition  <= footHeight && window.matchMedia( '(max-width: 767px)' ).matches) {
          topScroll.css({
          "bottom": 0
          });
        }
      } else {
        topScroll.css({
          "position": "fixed",
          "bottom": 10
        });
      }
    });
  
  topScroll.on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


$(function(){
  $('a[href^="#"]').click(function() {
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});