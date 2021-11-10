const imgList = ["img/slide/_MG_2338.jpg","img/slide/IMG_2236.jpg","img/slide/IMG_2238.jpg","img/slide/IMG_2241.jpg","img/slide/IMG_2245.jpg","img/slide/IMG_2277.jpg","img/slide/IMG_2292.jpg","img/slide/IMG_2303.jpg","img/slide/IMG_2325.jpg"];
let imgIndex = 0;

// Hvis der trykkes på "Næste" knap, kald funktion nextImg();
document.getElementById("galleryNext").addEventListener("click", function () {
  nextImg();
});

// Hvis der trykkes på "Forrige" knap, kald funktion nextImg();
document.getElementById("galleryPrev").addEventListener("click", function () {
  prevImg();
});

// Funktion der ændrer billedet ud fra en specifik position i imgList arrayet.
function setImg() {
  const slideImg = document.getElementById("slideImg");
  slideImg.src = imgList[imgIndex];
}

// Funktion der øger imgIndex, og kalder på setImg, så vi kan se det næste billede
function nextImg() {
  if (imgIndex < imgList.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  setImg();
}

// Funktion der trækker fra imgIndex, og kalder på setImg, så vi kan se det forrige billede
function prevImg() {
  if (imgIndex > 0) {
    imgIndex--;
  } else {
    imgIndex = imgList.length - 1;
  }
  setImg();
}
