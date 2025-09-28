function runDeviceSpecificCode() {
    if ($(window).width() <= 768) {
        //console.log("Mobile");
        
    } else {
        //console.log("Desktop");
        //alert('hi');
  let currentIndex = 0;
  const slideWidth = 220;
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
    slideInterval = setInterval(nextSlide, 7000);
  }

  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  // Start slideshow on page load
  startSlideshow();

  // Pause on hover
  $('.slideshow-container').mouseenter(stopSlideshow).mouseleave(startSlideshow);
    }
}

$(document).ready(runDeviceSpecificCode);
$(window).resize(runDeviceSpecificCode);



$(document).ready(function() {
  
});
