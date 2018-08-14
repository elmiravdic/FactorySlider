$('.carousel').slick({
  dots: false,
  infinite: true,
  slidesPerRow: 3,
  prevArrow: $('.next'),
  nextArrow: $('.prev'),
  rows: 2,
  responsive: [
  {
    breakpoint: 478,
    settings: {
      slidesPerRow: 1,
      rows: 1,
    }
  }
]
});