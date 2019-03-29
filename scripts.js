document.addEventListener("click", e => {
  if (e.target.matches(".open-modal-btn")) {
    let modal = e.target.parentElement.parentElement.previousElementSibling;
    modal.style.display = "block";
  }
  if (e.target.matches(".close")) {
    let modal = e.target.parentElement.parentElement;
    modal.style.display = "none";
  }
  if (e.target.matches(".modal")) {
    let modals = document.querySelectorAll(".modal");
    for (var i = 0, max = modals.length; i < max; i++) {
      modals[i].style.display = "none";
    }
  }
});
