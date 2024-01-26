function showSearchBar() {
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBarContainer');

 
    searchIcon.style.display = 'none';
  
    searchBar.style.display = 'flex';
}

function performSearch() {
    const searchInputValue = document.getElementById('searchInput').value;
    alert('Performing search for: ' + searchInputValue);
    
}
