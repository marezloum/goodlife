const heroSwiper = new Swiper('.hero__slider', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  speed: 3000,
  pagination: {
    el: ".hero__slider-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const becomeSwiper = new Swiper('.become__slider', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  speed: 3000,
  pagination: {
    el: ".become__slider-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


$(".burger").on('click', function() {
  $(this).toggleClass("burger_active")
  $(".header__hidden-menu").toggleClass("header__hidden-menu_active")
})

$(window).click(function() {
  $(".header__hidden-menu").removeClass("header__hidden-menu_active")
    $(".burger").removeClass("burger_active")
});

$('.header__hidden-menu, .burger').click(function(event){
  event.stopPropagation();
});


$(".btn").on("mousedown", function(e){
  var x = e.clientX - e.target.getBoundingClientRect().x;
  var y = e.clientY - e.target.getBoundingClientRect().y;
  $(this).css({"--x": `${x}px`, "--y": `${y}px`})  
});