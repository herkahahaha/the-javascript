const addForm = document.querySelector(".add");
const list = document.querySelector(".lists");
const search = document.querySelector(".search input");
// console.log(list);

// generate js func into html
const generate = (param) => {
  const html = `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${param}</span>
          <button class="delete btn btn-small btn-dark">x</button>
        </li>
    `;
  list.innerHTML += html;
};

// add todo list
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = addForm.add.value.trim();
  console.log(newTodo);
  if (newTodo.length) {
    // parsee generate into newTodo
    generate(newTodo);
    addForm.reset();
  }
});

// remove todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// search todo
search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const typing = search.value.trim();
  //   console.log(term);
  filteredData(typing);
});

// filter func
const filteredData = (param) => {
  // get childern of lists
  let newData = Array.from(list.children).filter(
    (data) => !data.textContent.toLowerCase().includes(param)
  );
  //   console.log(newData);
  newData.length > null
    ? newData.forEach((data) => data.classList.add("filtered"))
    : newData.forEach((data) => data.classList.remove("filtered"));
};
