// Aside Menu Logic
const headerAsideMenu = document.querySelector("header aside");

const headerBurgerMenu = document.getElementById("header-burger-menu");

headerBurgerMenu.addEventListener("click", () => {
  headerAsideMenu.classList.toggle("active");
});

headerAsideMenu.addEventListener("click", () => {
  headerAsideMenu.classList.remove("active");
});

// animations
const elementsForAnimate = document.querySelectorAll(".animate");

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.classList.add("animated");
      observer.unobserve(element);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.4,
  rootMargin: "0px",
  root: null,
});

elementsForAnimate.forEach((element) => {
  observer.observe(element);
});
observer.observe;
