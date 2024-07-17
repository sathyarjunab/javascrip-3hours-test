let submit = document.querySelector("form");

submit.addEventListener("submit", (e) => {
  console.log("da");
  e.preventDefault();
  let page = document.querySelector("#list");
  let name = e.target.name.value;
  let description = e.target.description.value;
  let car = e.target.car.value;
  let dele = document.createElement("button");
  let edit = document.createElement("button");
  let obj = {
    userName: name,
    userDescription: description,
    userCar: car,
  };
  localStorage.setItem(name, JSON.stringify(obj));
  let list = document.createElement("li");
  list.textContent = `${name}-${description}-${car}`;
  dele.className = "delete";
  edit.className = "edit";
  dele.textContent = "delete";
  edit.textContent = "edit";
  list.appendChild(dele);
  list.appendChild(edit);
  page.appendChild(list);
  dele.addEventListener("click", (e) => {
    let child = e.target.parentNode;
    let name = child.textContent.split("-")[0];
    localStorage.removeItem(name);
    page.removeChild(child);
  });
  edit.addEventListener("click", (e) => {
    let child = e.target.parentNode;
    let data = Array.from(child.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent)
      .join("")
      .trim()
      .split("-");
    console.log(data);
    console.log(document.querySelector("#name"));
    document.querySelector("#name").value = `${data[0]}`;
    document.querySelector("#description").value = `${data[1]}`;
    document.querySelector("#cars").value = `${data[2]}`;
    console.log(document.querySelector("#cars"));
    localStorage.removeItem(data[0]);
    page.removeChild(child);
  });
});
