/* ==========================================
   PROJECTS.JS
   Portfolio Project Functions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // View Preview Buttons
    // ==========================================

    const previewButtons = document.querySelectorAll(".preview-btn");

    previewButtons.forEach(button => {

        button.addEventListener("click", function () {

            const url = this.dataset.link;

            if (url && url !== "#") {

                window.location.href = url;

            }

        });

    });



    // ==========================================
    // Download Buttons
    // ==========================================

    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(button => {

        button.addEventListener("click", function () {

            const file = this.dataset.file;

            if (file && file !== "#") {

                window.open(file, "_blank");

            }

        });

    });



    // ==========================================
    // Project Card Hover
    // ==========================================

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("active");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("active");

        });

    });

});
