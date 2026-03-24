
let lang = "pl";


function toggleLang() {

lang = lang === "pl" ? "en" : "pl";


document
.querySelectorAll("[data-pl]")
.forEach(el => {

el.textContent =
el.getAttribute("data-" + lang);

});

}



function toggleTheme() {

document.body.classList.toggle("contrast");

}



document.getElementById("year")

.textContent = new Date().getFullYear();



toggleLang();
