const SearchHandler = () => {
  const searchBar = document.querySelector('#search-bar');
  const searchButton = document.querySelector('#search-btn');
  let query = searchBar.value;
  console.log(query === '');

  if (query === '') {
    searchButton.href = '/#';
  }

  searchBar.addEventListener('input', () => {
    query = searchBar.value;
    searchButton.href = `#/search/${query}`;
    if (query === '') {
      searchButton.href = '/#';
    }
  });

  searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (query !== '') {
        searchButton.click();
      }
    }
  });
};

export default SearchHandler;
