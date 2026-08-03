/* ==========================================
   ANIMATIONS.JS
   Scroll Reveal Animations
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Elements to Animate
    // ==========================================

    const animatedElements = document.querySelectorAll(

        ".fade-up, .fade-left, .fade-right, .zoom"

    );



    // ==========================================
    // Intersection Observer
    // ==========================================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });



    // ==========================================
    // Observe Elements
    // ==========================================

    animatedElements.forEach(element => {

        observer.observe(element);

    });



    // ==========================================
    // Hero Animation
    // ==========================================

    const heroTitle = document.querySelector(".hero-left h1");
    const heroText = document.querySelector(".hero-left p");
    const heroButtons = document.querySelector(".hero-buttons");

    if (heroTitle) {

        heroTitle.classList.add("fade-left");

    }

    if (heroText) {

        heroText.classList.add("fade-up");

    }

    if (heroButtons) {

        heroButtons.classList.add("zoom");

    }

});