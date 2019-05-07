document.addEventListener("click", e => {
  if (e.target.matches(".open-modal-btn")) {
    const modal = e.target.parentElement.parentElement.previousElementSibling;
    modal.style.display = "block";
  }
  if (e.target.matches(".close")) {
    closeModals();
  }
  if (e.target.matches(".modal")) {
    closeModals();
  }
});

const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  const mainNav = document.querySelector("#navbar");
  mainNav.style.display = mainNav.style.display === "block" ? "none" : "block";
});

function closeModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => (modal.style.display = "none"));
}
