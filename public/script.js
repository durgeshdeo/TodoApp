// const todoForm = document.querySelector(".todo-form")
// const todoInput = document.querySelector(".todo-form input[type='text']")
const todomain = document.getElementsByTagName("main");

// todoForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const todoValue = todoInput.value

//     const newList = document.createElement("div")
//     const newListInnerHtml = `
//     <div class="todo-list">
//     <span>${todoValue}</span>
//     <div class="buttons">
//     <button class="delete">Delete</button>
//     <button class="completed">Completed</button>
//     </div>
//     </div>
//     `
//     newList.innerHTML = newListInnerHtml
//     todomain.append(newList)

//     todoInput.value = ""
// })

todomain.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const targeteddiv = e.target.parentNode.parentNode;
    targeteddiv.remove();
  }
  if (e.target.classList.contains("completed")) {
    const divspan = e.target.parentNode.previousElementSibling;
    divspan.style.textDecoration = "line-through";
  }
});
