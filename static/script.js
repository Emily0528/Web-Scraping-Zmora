document.addEventListener("DOMContentLoaded", function () {
  var textContainer = document.querySelector(".text-container");
  // Szerokość kontenera tekstowego
  var containerWidth = textContainer.clientWidth;
  // Pozycja środka kontenera
  var containerCenter = containerWidth / 2;
  // Przewijanie do pozycji środka kontenera
  textContainer.scrollLeft = containerCenter;
});
