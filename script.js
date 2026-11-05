document.addEventListener("DOMContentLoaded", () => {
  // 1. Мобильное меню
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Закрываем меню при клике на ссылку
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    name.classList.remove("error");
    email.classList.remove("error");
    message.classList.remove("error");

    let isValid = true;

    if (name.value.trim() === "") {
      name.classList.add("error");
      isValid = false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
      email.classList.add("error");
      isValid = false;
    }

    if (message.value.trim() === "") {
      message.classList.add("error");
      isValid = false;
    }

    if (isValid) {
      const btn = form.querySelector("button");
      const originalText = btn.innerHTML;

      btn.innerHTML = "Отправлено! ✓";
      btn.style.backgroundColor = "#fff";
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = "var(--accent)";
      }, 3000);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
