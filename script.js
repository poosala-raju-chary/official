$(document).ready(function () {
  let current = 0;
  const slides = $(".slide");
  const total = slides.length;

  function showSlide(index) {
    slides.removeClass("active");
    slides.eq(index).addClass("active");
  }

  function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
  }

  setInterval(nextSlide, 4000); // Change slide every 4 seconds
});
