const articles = [...document.querySelectorAll("article")];

articles.map((article) => {
  const head = article.querySelector("header");
  const content = article.querySelector(".content");
  const arrow = head.querySelector(".arrow img");

  head.addEventListener("click", () => {
    content.classList.toggle("full-height");
    arrow.classList.toggle("rotate-arrow");
  });
});
