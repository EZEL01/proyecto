const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Filtros de la carta
const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    foodCards.forEach(card => {
      card.classList.toggle("hidden", category !== "todos" && card.dataset.category !== category);
    });
  });
});

// Los botones de cada producto preparan un mensaje para WhatsApp.
const whatsappBase = "https://wa.me/5493482445291?text=";
document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    const product = link.dataset.product;
    const target = document.querySelector("#whatsappLink");
    if (target) {
      target.href = whatsappBase + encodeURIComponent(`Hola Mostacho's, quiero consultar por ${product}. ¿Me pasan la carta y los precios?`);
    }
  });
});

// Formulario de demostración: no transmite ni almacena datos personales.
const registrationForm = document.querySelector("#registrationForm");
const formMessage = document.querySelector("#formMessage");
registrationForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!registrationForm.reportValidity()) return;
  const name = document.querySelector("#fullName").value.trim();
  formMessage.textContent = `¡Gracias, ${name}! El formulario de muestra funciona, pero todavía no envía tu inscripción al comercio.`;
  formMessage.className = "form-message success";
  registrationForm.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
