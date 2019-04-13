document.addEventListener("click", e => {
  if (e.target.matches(".open-modal-btn")) {
    const modal = e.target.parentElement.parentElement.previousElementSibling;
    modal.style.display = "block";
  }
  if (e.target.matches(".close")) {
    const modal = e.target.parentElement.parentElement;
    modal.style.display = "none";
  }
  if (e.target.matches(".modal")) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => (modal.style.display = "none"));
  }
  if (e.target.matches(".navbar-toggle")) {
    const mainNav = document.getElementById("navbar");
    mainNav.style.display =
      mainNav.style.display === "block" ? "none" : "block";
  }
});
