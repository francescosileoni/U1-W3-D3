const pageForm = document.getElementById("task-form");
pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const valueForm = document.getElementById("input-list");

  const listSection = document.createElement("div");
  listSection.innerHTML = `<ul><li>${valueForm.value} <button class='hide-button'>HIDE</button> </li></ul>`;

  const taskList = document.getElementById("list");
  taskList.appendChild(listSection);

  //svuotiamo l'input dopo aver fatto il submit:
  valueForm.value = "";
});
