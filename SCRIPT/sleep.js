const staticDinamicClients = document.querySelector('#static-dinamic-clients');

const options = {
  root: null,
  threshold: 0.5 // элемент будет считаться видимым, когда он пересекает 50% viewport
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateValue(countPeopleValue, 0, 5200, 120000);
      animateValue(middleMarkValue, 0, 4.8, 120000);
      animateValue(franchizeValue, 0, 10, 120000);
      observer.unobserve(staticDinamicClients);
    }
  });
}, options);

observer.observe(staticDinamicClients);