function toggleMenu() {
  document.getElementById("mobilePanel").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const fitSection = document.querySelector(".fit-section");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        fitSection.classList.add("visible");
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(fitSection);
});
//for advisory process steps animation

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".process-step");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  steps.forEach(step => observer.observe(step));
});

//for FAQ accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach(i => i.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
});




