console.log("DZIALA JS");

const buttonTheme = document.getElementById("zmianaMotywu");
const buttonToggle = document.getElementById("sectionVisibility");
const link = document.getElementById("theme");
const section = document.getElementById("doswiadczenie");

section.style.display = "block";


buttonTheme.addEventListener("click", function () {
    if (link.getAttribute("href") === "red.css") {
        link.setAttribute("href", "green.css");
    } else {
        link.setAttribute("href", "red.css");
    }
});

buttonToggle.addEventListener("click", function () {
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});