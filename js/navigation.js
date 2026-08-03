/* ==========================================
   NAVIGATION.JS
   Portfolio Navigation Functions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Elements
    // ==========================

    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");



    // ==========================
    // Sticky Navbar Effect
    // ==========================

    function navbarScroll() {

        if (window.scrollY > 50) {

            header.style.background = "rgba(7,17,31,.97)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(7,17,31,.90)";
            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", navbarScroll);



    // ==========================
    // Smooth Scrolling
    // ==========================

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = this.getAttribute("href");

            if (!target.startsWith("#")) return;

            e.preventDefault();

            const section = document.querySelector(target);

            if (!section) return;

            window.scrollTo({

                top: section.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });



    // ==========================
    // Active Navigation Link
    // ==========================

    function activateNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activateNav);



    // ==========================
    // Initialize
    // ==========================

    navbarScroll();

    activateNav();

});