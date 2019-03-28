document.addEventListener("click", e => {
  if (e.target.matches(".open-modal-btn")) {
    let modal = e.target.parentElement.parentElement.previousElementSibling;
    modal.style.display = "block";
  }
  if (e.target.matches(".close")) {
    let modal = e.target.parentElement.parentElement;
    modal.style.display = "none";
  }
});
