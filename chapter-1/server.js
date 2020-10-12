const addForm = document.querySelector(".add");
const list = document.querySelector(".lists");

// generate js func into html
const generate = (param) => {
  const html = `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${param}</span>
          <button class="btn btn-small btn-dark">x</button>
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
// search todo
