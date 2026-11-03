const themeButton = document.getElementById("themeButton");
const year = document.getElementById("year");

// Show the current year in the footer.
year.textContent = new Date().getFullYear();

// Let visitors switch between light and dark themes.
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light mode";
  } else {
    themeButton.textContent = "Dark mode";
  }
});
