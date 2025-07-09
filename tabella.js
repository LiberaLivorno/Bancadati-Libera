document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-link[data-category]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelectorAll('.nav-link[data-category]').forEach(function(l) {
        l.classList.remove('active');
      });
      this.classList.add('active');
      const category = this.getAttribute('data-category');
      document.querySelectorAll('[data-category]').forEach(function(card) {
        if (card.closest('.row.g-2')) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});

