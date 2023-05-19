const articles = [...document.querySelectorAll("article")];
const navbar = document.querySelector("header");

// Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("drop");
  } else {
    navbar.classList.remove("drop");
  }
});

articles.map((article) => {
  const head = article.querySelector("header");
  const content = article.querySelector(".content");
  const arrow = head.querySelector(".arrow img");

  head.addEventListener("click", () => {
    content.classList.toggle("full-height");
    arrow.classList.toggle("rotate-arrow");
  });
});

// Change price

const day = 45;

const priceButtons = [...document.querySelectorAll(".prices button")];
const dayOne = document.querySelector(".day-one");
const dayTwo = document.querySelector(".day-two");

priceValues = {
  0: ["500", "500", "500", "1,000", "1,000", "1,000", "1,000", "500"],
  1: ["500", "500", "500", "1,000", "1,000", "1,000", "2,500", "1,500"],
  2: ["2,500", "2,500", "2,500", "5,000", "5,000", "5,000", "5,000", "2,500"],
  3: [
    "5,000",
    "5,000",
    "5,000",
    "10,000",
    "10,000",
    "10,000",
    "10,000",
    "5,000",
  ],
};

const prices = [...document.querySelectorAll(".priceVal")];

priceButtons.map((btn, i) => {
  btn.addEventListener("click", () => {
    // Change days
    dayOne.innerHTML = 45;
    dayTwo.innerHTML = 45;

    // Change prices
    prices.map((item, j) => {
      item.innerHTML = priceValues[i][j];
    });

    // Button outline change
    priceButtons.map((button) => button.classList.remove("button-outline"));
    btn.classList.add("button-outline");
  });
});
