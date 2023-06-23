$(function () {


  $(".gnb>li").mouseenter(function () {
    $(".sub").stop().slideDown();
    $(".sub_menu").stop().slideDown();
  });
  $(".gnb>li").mouseleave(function () {
    $(".sub").stop().slideUp();
    $(".sub_menu").stop().slideUp();
  });



});

var swiper = new Swiper(".main", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var swiper = new Swiper(".best_swipe", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,

});

var swiper = new Swiper(".review", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },//도트부분을 작동하게 하는 옵션.
  autoplay: {
    delay: 1000,
    /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
});

var swiper = new Swiper(".story", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});