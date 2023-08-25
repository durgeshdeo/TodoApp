const todomain = document.querySelector(".main");

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
