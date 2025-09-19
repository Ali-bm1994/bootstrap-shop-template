const caret = document.getElementById('caret');

caret.addEventListener("click", () => {
  caret.firstElementChild.classList.toggle("fa-angle-down");
  caret.firstElementChild.classList.toggle("fa-angle-up");
  caret.firstElementChild.classList.toggle('rotate')
});
