const toggleButton = document.querySelector(".toggle-button");

const navList = document.querySelector(".nav-list");

// console.log(toggleButton, navList);

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
