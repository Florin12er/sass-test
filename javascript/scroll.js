const hiddenElements = document.querySelectorAll(".hidden");
const newDirectory = document.getElementById("new");
const dashboard = document.getElementById("dashboard");
const myRepositories = document.getElementById("my-repositories");
const show = document.getElementById("show");
const extra = document.getElementById("extra");
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

newDirectory.addEventListener("click", () => {
  const repo = document.createElement("div");
  repo.classList.add("repository");
  repo.id = "repository";
  const button = document.createElement("button");
  button.classList.add("repository-image");
  button.innerHTML = `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>face-man</title><path d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25
            0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10
            0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16
            9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" /></svg>`;
  button.id = "repository-image";
  const name = document.createElement("a");
  name.classList.add("repository-name");
  name.id = "repository-name";
  name.innerHTML = "value";
  repo.append(button, name);
  extra.append(repo);
});
