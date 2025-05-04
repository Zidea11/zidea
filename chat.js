const stars = document.querySelectorAll('.star-rating .star');
let rating = 0;

stars.forEach(star => {
  star.addEventListener('click', function() {
    rating = parseInt(this.dataset.value);
    updateStars();
  });

  star.addEventListener('mouseover', function() {
    const hoverRating = parseInt(this.dataset.value);
    highlightStars(hoverRating);
  });

  star.addEventListener('mouseout', function() {
    updateStars();
  });
});

function updateStars() {
  stars.forEach(star => {
    const starValue = parseInt(star.dataset.value);
    if (starValue <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function highlightStars(hoverRating) {
  stars.forEach(star => {
    const starValue = parseInt(star.dataset.value);
    if (starValue <= hoverRating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}