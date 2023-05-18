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
