const menBannerImageDiv = document.querySelector(".men-category-image");
const womenBanner = document.querySelector(".women-category-banner");
const menBanner = document.querySelector(".men-category-banner");
const womenBannerImageDiv = document.querySelector(".women-category-image");
const categoriesBackgroundDiv = document.querySelector(".category-infoholder");
const foryouBackgroundDiv = document.querySelector(".foryou-container");

let bool = false;
function showMenBanner() {
  menBanner.classList.remove("hiding-class-men-banner");
  //   bool = true;
}
function hideMenBanner() {
  menBanner.classList.add("hiding-class-men-banner");
}
function showWomenBanner() {
  womenBanner.classList.remove("hiding-class-women-banner");
  //   bool = true;
}
function hideWomenBanner() {
  womenBanner.classList.add("hiding-class-women-banner");
}

menBannerImageDiv.onclick = function () {
  if (menBanner.classList.contains("hiding-class-men-banner")) {
    showMenBanner();
    hideWomenBanner();
  } else {
    hideMenBanner();
  }
};

womenBannerImageDiv.onclick = function () {
  if (womenBanner.classList.contains("hiding-class-women-banner")) {
    showWomenBanner();
    hideMenBanner();
  } else {
    hideWomenBanner();
  }
};

// function men() {
//   menBannerImageDiv.addEventListener("click", function (e) {
//     console.log(e.target)
//     if (bool == false) {
//       showMenBanner();
//       hideWomenBanner();
//       console.log(bool);
//     } else {
//       hideMenBanner();
//       bool = false;
//     }
//   });
// }

// function women() {
//   womenBannerImageDiv.addEventListener("click", function (e) {
//     console.log(e.target)
//     if (bool == false) {
//       showWomenBanner();
//       hideMenBanner();
//       console.log(bool);
//     } else {
//       hideWomenBanner();
//       bool = false;
//     }
//   });
// }

// men();
// women();
// womenBannerImage[0].addEventListener("click", function () {
//   alert("women!");
// });

// categoriesBackgroundDiv.addEventListener("click", 'categoriesBackgroundDiv', function () {
//   hideMenBanner();
// });
