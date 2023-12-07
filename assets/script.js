const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let i = 0;
const arrow_left = document.querySelector(".arrow_left");
const bannerImage = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

arrow_left.addEventListener("click", function () {
  i--;
  if (i === -1) {
    i = slides.length - 1;
  }
  bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
  p.innerHTML = slides[i].tagLine;
  Array.from(dots).forEach(function (element) {
    element.classList.remove("dot_selected");
  });
  dots[i].classList.add("dot_selected");
});

const arrow_right = document.querySelector(".arrow_right");

arrow_right.addEventListener("click", function () {
  i++;
  if (i === slides.length) {
    i = 0;
  }
  bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
  p.innerHTML = slides[i].tagLine;
  Array.from(dots).forEach(function (element) {
    element.classList.remove("dot_selected");
  });
  dots[i].classList.add("dot_selected");
});

Array.from(dots).forEach(function (element, i) {
  element.addEventListener("click", function () {
    Array.from(dots).forEach(function (element) {
      element.classList.remove("dot_selected");
    });
    element.classList.add("dot_selected");
    bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
    p.innerHTML = slides[i].tagLine;
  });
});
