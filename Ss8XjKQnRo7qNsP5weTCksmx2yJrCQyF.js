function runDeviceSpecificCode() {
    if ($(window).width() <= 768) {
        //console.log("Mobile");
        $('#ad1').attr('src', 'binkit_landscape.jpg');
        $('#ad2').attr('src', 'dominos_landscape.jpg');
        $('#ad3').attr('src', 'swiggy.jpg');
        $('#ad_page').css('background-image', 'url("AD_PAGE_landscape.jpg")');
        
        
        let currentIndex = 0;
  const slideHeight = 200;
  const totalSlides = $('.slide').length;
  let slideInterval;

  function goToSlide(index) {
    $('.slides-wrapper').css('transform', `translateY(-${index * slideHeight}px)`);
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

  startSlideshow();

  $('.slideshow-container')
    .mouseenter(stopSlideshow)
    .mouseleave(startSlideshow);

  // Swipe gestures
  let touchStartY = 0;
  let touchEndY = 0;

  $('.slideshow-container').on('touchstart', function(e) {
    touchStartY = e.originalEvent.touches[0].clientY;
  });

  $('.slideshow-container').on('touchend', function(e) {
    touchEndY = e.originalEvent.changedTouches[0].clientY;
    if (touchEndY < touchStartY - 50) {
      nextSlide(); // Swipe up
    } else if (touchEndY > touchStartY + 50) {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentIndex); // Swipe down
    }
  });

  // Keyboard navigation
  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowDown') {
      nextSlide();
    } else if (e.key === 'ArrowUp') {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentIndex);
    }
  });
    } 
    
    else {
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

