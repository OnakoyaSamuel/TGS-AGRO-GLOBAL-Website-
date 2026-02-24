document.addEventListener("DOMContentLoaded", function () {

    console.log("TGS AGRO GLOBAL Website Loaded");

    // Smooth Scroll for navigation links
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Sticky header shadow on scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // Scroll reveal animation
    const sections = document.querySelectorAll(".section");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});
