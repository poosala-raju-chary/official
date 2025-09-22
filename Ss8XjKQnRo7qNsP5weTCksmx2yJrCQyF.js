$(document).ready(function() {
  let currentIndex = 0;
  const slideWidth = 800;
  const totalSlides = $('.slide').length;
  let slideInterval;

  function goToSlide(index) {
    $('.slides-wrapper').css('transform', `translateX(-${index * slideWidth}px)`);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  // Start slideshow on page load
  startSlideshow();

  // Pause on hover
  $('.slideshow-container').mouseenter(stopSlideshow).mouseleave(startSlideshow);
});
