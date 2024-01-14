import { elements } from "./elements.js";
export function scroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        elements.myRepositories.style.top = "54px";
      } else {
        entry.target.classList.remove("show");
        elements.myRepositories.style.top = "0";
      }
    });
  });

  elements.hiddenElements.forEach((el) => observer.observe(el));
}
