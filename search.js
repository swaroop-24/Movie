const searchInput = document.querySelector('input[type="search"]');
const shows = document.querySelectorAll('.show');

searchInput.addEventListener('keyup', function() {
  const searchTerm = searchInput.value.toLowerCase();

  shows.forEach(function(show) {
    const title = show.querySelector('h3').textContent.toLowerCase();

    if(title.indexOf(searchTerm) > -1) {
      show.style.display = '';
    } else {
      show.style.display = 'none';
    }
  });
});
