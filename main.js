document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("1SqMn5fAHhkJK4Dvo");

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("service_wba1j98", "template_si14m9k", this)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Message sent!",
            text: "Thank you for reaching out 💙",
            confirmButtonColor: "#3550ff",
          });
          this.reset();
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong.",
            confirmButtonColor: "#3550ff",
          });
        });
    });
  }

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const modalText = document.getElementById("modalText");
  const closeModalBtn = document.getElementById("closeModal");

  if (!modal || !modalContent || !modalText || !closeModalBtn) return;

  function closeModal() {
    modal.classList.add("opacity-0", "pointer-events-none");
    modalContent.classList.add("scale-95");
  }

  function renderProject(project) {
    let html = `
      <h2 class="text-2xl font-semibold text-indigo-600 mb-1">
        ${project.title}
      </h2>
    `;

    project.sections.forEach(section => {
      html += `
        <h3 class="text-indigo-600 font-semibold mt-4 mb-2">
          ${section.heading}
        </h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          ${section.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
    });

    return html;
  }

  fetch("./projectsData.json")
    .then(res => res.json())
    .then(projects => {
      document.querySelectorAll("[data-project]").forEach(button => {
        button.addEventListener("click", () => {
          const project = projects.find(
            p => p.id === button.dataset.project
          );

          if (!project) return;

          modalText.innerHTML = renderProject(project);
          modal.classList.remove("opacity-0", "pointer-events-none");
          modalContent.classList.remove("scale-95");
        });
      });
    });

  closeModalBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });
});
