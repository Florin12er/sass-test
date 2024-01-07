const hiddenElements = document.querySelectorAll(".hidden");
const dashboard = document.getElementById("dashboard");
const myRepositories = document.getElementById("my-repositories");
const show = document.getElementById("show");
console.log(dashboard, myRepositories);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      myRepositories.style.top = "54px";
    } else {
      entry.target.classList.remove("show");
      myRepositories.style.top = "0";
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
