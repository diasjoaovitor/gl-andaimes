document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider')
  const lane = document.querySelector('.lane')
  const slides = document.querySelectorAll('.slide')

  const visibleSlides = lane.clientWidth / slides[0].clientWidth
  const margin =
    Math.ceil(visibleSlides) * slides[0].clientWidth - lane.clientWidth

  slider.style.setProperty(
    '--slider-width',
    `-${slides.length * slides[0].clientWidth + margin}px`
  )

  console.log(`-${slides.length * slides[0].clientWidth}px`)
})
