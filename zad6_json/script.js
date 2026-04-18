// zadanie 4
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

// zadanie 5
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;


    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const zgoda = document.getElementById("zgoda");

    // ukrycie błędów
    document.getElementById("error1").style.display = "none";
    document.getElementById("error2").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("error4").style.display = "none";


    // imię
    if (fname.value === "" || /[0-9]/.test(fname.value)) {
        document.getElementById("error1").style.display = "block";
        isValid = false;
    }

    // nazwisko
    if (lname.value === "" || /[0-9]/.test(lname.value)) {
        document.getElementById("error2").style.display = "block";
        isValid = false;
    }

    // email
    if (email.value === "" || email.value.includes("@") === false) {
        document.getElementById("error3").style.display = "block";
        isValid = false;
    }

    // checkbox
    if (zgoda.checked === false) {
        document.getElementById("error4").style.display = "block";
        isValid = false;
    }

    if (isValid === true) {
        alert("Formularz wyslany poprawnie!")
    }
});

// zadanie 6
fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const ulUmiejetnosci = document.getElementById("umiejetnosci");
        const ulProjekty = document.getElementById("projekty");
        data.umiejetnosci.forEach(function (item) {
            const li = document.createElement("li");
            li.textContent = item;
            ulUmiejetnosci.appendChild(li);
        });
        data.projekty.forEach(function(projekt){
            const li = document.createElement("li");
            li.textContent = projekt.nazwa + " - " + projekt.opis;
            ulProjekty.appendChild(li);
        })
    });