// zadanie 4 Oskar Jabłoński
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

// zadanie 5 Oskar Jabłoński
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;


    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const zgoda = document.getElementById("zgoda");

    // ukrycie błędów Oskar Jabłoński
    document.getElementById("error1").style.display = "none";
    document.getElementById("error2").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("error4").style.display = "none";


    // imię Oskar Jabłoński
    if (fname.value === "" || /[0-9]/.test(fname.value)) {
        document.getElementById("error1").style.display = "block";
        isValid = false;
    }

    // nazwisko Oskar Jabłoński
    if (lname.value === "" || /[0-9]/.test(lname.value)) {
        document.getElementById("error2").style.display = "block";
        isValid = false;
    }

    // email Oskar Jabłoński
    if (email.value === "" || email.value.includes("@") === false) {
        document.getElementById("error3").style.display = "block";
        isValid = false;
    }

    // checkbox Oskar Jabłoński
    if (zgoda.checked === false) {
        document.getElementById("error4").style.display = "block";
        isValid = false;
    }

    if (isValid === true) {
        alert("Formularz wyslany poprawnie!")
    }
});

// zadanie 6 Oskar Jabłoński
fetch("data.json")
    .then(function (response) {
        return response.json(); // konwertacja danych do formatu obiektu JavaScript Oskar Jabłoński
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

// zadanie 7 Oskar Jabłoński Local Storage
// pobranie elementów z HTML
const input = document.getElementById("luwagi");
const button = document.getElementById("wyslijUwagi");
const ul = document.getElementById("lista");

// pobranie danych z localStorage
let uwagi = JSON.parse(localStorage.getItem("uwagi")) || [];

// funkcja do wyświetlania listy
function wyswietlListe() {
    ul.innerHTML = ""; // czyścimy listę

    uwagi.forEach(function(item, index) {
        const li = document.createElement("li");
        li.textContent = item;

        // przycisk usuwania
        const btnUsun = document.createElement("button");
        btnUsun.textContent = "Usuń";

        btnUsun.addEventListener("click", function() {
            uwagi.splice(index, 1); // usuwamy z tablicy
            localStorage.setItem("uwagi", JSON.stringify(uwagi)); // zapis
            wyswietlListe(); // odświeżenie listy
        });

        li.appendChild(btnUsun);
        ul.appendChild(li);
    });
}

// dodawanie nowej uwagi
button.addEventListener("click", function() {
    const tekst = input.value;

    if (tekst === "") return;

    uwagi.push(tekst); // dodanie do tablicy

    localStorage.setItem("uwagi", JSON.stringify(uwagi)); // zapis

    input.value = ""; // czyszczenie inputa

    wyswietlListe(); // odświeżenie listy
});

// uruchomienie przy starcie
wyswietlListe();