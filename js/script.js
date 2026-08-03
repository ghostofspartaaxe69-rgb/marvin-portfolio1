/* ==========================================
   SCRIPT.JS
   Global Website Functions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Current Year (Footer)
    // ==========================================

    const yearElement = document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }



    // ==========================================
    // Back To Top Button
    // ==========================================

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    // ==========================================
    // External Links
    // ==========================================

    document.querySelectorAll('a[target="_blank"]').forEach(link => {

        link.setAttribute("rel", "noopener noreferrer");

    });



    // ==========================================
    // Image Lazy Loading
    // ==========================================

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.setAttribute("loading", "lazy");

    });



    // ==========================================
    // Console Message
    // ==========================================

    console.log("%cMarvin Tinonas Portfolio", "color:#2563EB;font-size:18px;font-weight:bold;");

    console.log("Thanks for checking out my portfolio!");



    // ==========================================
    // Portfolio Ready
    // ==========================================

    console.log("Website initialized successfully.");

});