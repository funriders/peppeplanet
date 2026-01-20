document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".package-card");

  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      // Close other cards
      cards.forEach(c => {
        if (c !== card) c.classList.remove("is-active");
      });

      // Toggle current
      card.classList.toggle("is-active");

      e.stopPropagation();
    });
  });

  // Close overlay when clicking outside
  document.addEventListener("click", () => {
    cards.forEach(card => card.classList.remove("is-active"));
  });
});
