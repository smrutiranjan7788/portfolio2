document.addEventListener("DOMContentLoaded", () => {
  // EmailJS Initialization
  emailjs.init("lUT4kGL6vZxCfNarq"); // Replace with your actual public key

  // Handle contact form submission via EmailJS
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      emailjs.sendForm("service_x6bdq5s", "template_97f7h8i", this)
        .then(() => {
          // Show success popup
          const successPopup = document.getElementById("success-popup");
          if (successPopup) {
            successPopup.style.display = "flex";
          }

          // Reset the form
          form.reset();
        })
        .catch((error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        });
    });
  }

  // Close the popup when clicking the close button
  const closePopupBtn = document.getElementById("close-popup");
  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", () => {
      const successPopup = document.getElementById("success-popup");
      if (successPopup) {
        successPopup.style.animation = "fadeOut 0.3s ease-out";
        setTimeout(() => {
          successPopup.style.display = "none";
        }, 300); // Match the animation duration
      }
    });
  }

  // Scroll to contact section on nav click
  const contactNavBtn = document.getElementById("contact-nav-btn");
  const contactSection = document.getElementById("contact-section");
  if (contactNavBtn && contactSection) {
    contactNavBtn.addEventListener("click", (e) => {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
