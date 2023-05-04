const countPeopleValue = document.querySelector('.count-people-value');
const middleMarkValue = document.querySelector('.middle-mark-value');
const franchizeValue = document.querySelector('.franchize-value');

animateValue(countPeopleValue, 0, 5200, 120000);
animateValue(middleMarkValue, 0, 4.8, 120000);
animateValue(franchizeValue, 0, 10, 120000);
function animateValue(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = range / (duration / 32); // 32 мс - интервал между кадрами
  let previousTimestamp = null;

  function step(timestamp) {
    if (!previousTimestamp) {
      previousTimestamp = timestamp;
    }
    const progress = timestamp - previousTimestamp;
    current += increment * progress;
    previousTimestamp = timestamp;

    if (current >= end) {
      element.innerHTML = end.toFixed(1);
      element.classList.add('animated-value');
    } else {
      element.innerHTML = current.toFixed(1);
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}