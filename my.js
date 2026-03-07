const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) {
    document.getElementById('searchInput').focus();
  }
});

function closeSearch() {
  searchBar.classList.remove('open');
}

// ESC key close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
});