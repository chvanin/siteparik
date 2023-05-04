$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplayTimeout: 6000,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: 'linear', // Добавляем свойство cssEase
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});