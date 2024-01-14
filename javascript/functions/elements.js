const hiddenElements = document.querySelectorAll(".hidden");
const dashboard = document.getElementById("dashboard");
const myRepositories = document.getElementById("my-repositories");
const show = document.getElementById("show");
const extra = document.getElementById("extra");
const newDirectory = document.getElementById("new");
const modalContent = document.getElementById("modal-content");
const addRepo = document.getElementById("add-repo");
const cancelRepo = document.getElementById("cancel-repo");
const repositoryName = document.getElementById("name-repo");
const newRepo = document.getElementById("new_repo");
const name = document.getElementById("name");

export const elements = {
  name,
  newRepo,
  repositoryName,
  addRepo,
  cancelRepo,
  modalContent,
  hiddenElements,
  dashboard,
  myRepositories,
  show,
  extra,
  newDirectory,
};
