let darkTheme = localStorage.getItem("darkmode");
let themeBtn = document.getElementById("theme-switch");

let enableDark = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");
};
let disableDark = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
};
if (darkTheme === "active") {
  enableDark();
}
themeBtn.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkmode");
  darkTheme !== "active" ? enableDark() : disableDark();
});
