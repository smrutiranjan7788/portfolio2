document.addEventListener("DOMContentLoaded", () => {
  // Optional: Load projects and show as cards
  // fetch("/api/projects")
  //   .then(res => res.json())
  //   .then(data => {
  //     const list = document.getElementById("project-list");
  //     if (list) {
  //       data.forEach(project => {
  //         const item = document.createElement("div");
  //         item.className = "project-card";
  //         item.innerHTML = `
  //           <img src="${project.image}" alt="${project.title}" />
  //           <h3>${project.title}</h3>
  //           <p>${project.description}</p>
  //         `;
  //         list.appendChild(item);
  //       });
  //     }
  //   });

  // Contact form submission
  const contactForm = document.getElementById("contact-section");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const body = Object.fromEntries(formData.entries());

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          // Show success popup
          const successPopup = document.getElementById("success-popup");
          if (successPopup) {
            successPopup.style.display = "flex";
          }

          // Reset form
          e.target.reset();
        } else {
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again later.");
        console.error(error);
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

  // Close the popup when clicking the close button
  const closePopupBtn = document.getElementById("close-popup");
  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", () => {
      const successPopup = document.getElementById("success-popup");
      if (successPopup) {
        // Trigger fade-out animation before hiding
        successPopup.style.animation = "fadeOut 0.3s ease-out";

        // Hide the popup after the animation duration
        setTimeout(() => {
          successPopup.style.display = "none"; // Hide the popup after fade-out
        }, 300); // Matches the duration of the fade-out animation
      }
    });
  }

  // Modal form submission handling
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission

      // Optionally, reset form
      this.reset();

      // Show the modal
      const popup = document.getElementById("successModal");
      if (popup) {
        popup.style.display = "block";
      }
    });
  }
});

// Close modal function
function closeModal() {
  const popup = document.getElementById("successModal");
  if (popup) {
    popup.style.display = "none";
  }
}
