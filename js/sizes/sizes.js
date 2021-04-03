
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
});


$('.related-products-slider').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    }
  ]
});
