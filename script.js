const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", () => {
    alert("Paldies, ka izvēlējāties SmartMeal!");
  });
}
