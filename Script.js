document.addEventListener("DOMContentLoaded", function () {

console.log("TGS AGRO GLOBAL Website Loaded");

/* Smooth Scroll */
const links = document.querySelectorAll("nav a");

links.forEach(link => {
link.addEventListener("click", function (e) {
const targetId = this.getAttribute("href");

if (targetId.startsWith("#")) {
e.preventDefault();
const targetSection = document.querySelector(targetId);

if (targetSection) {
window.scrollTo({
top: targetSection.offsetTop - 70,
behavior: "smooth"
});
}
}
});
});

/* Header Shadow */
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
if (window.scrollY > 20) {
header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
} else {
header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
}
});

/* Scroll Animation */
const sections = document.querySelectorAll("section");

sections.forEach(section => {
section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.6s ease";
});

const reveal = () => {
const trigger = window.innerHeight * 0.85;

sections.forEach(section => {
const top = section.getBoundingClientRect().top;
if (top < trigger) {
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}
});
};

window.addEventListener("scroll", reveal);
reveal();

});
