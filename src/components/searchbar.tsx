export default function SearchBar() {
  return (
    <div className="searchbar">
      <img src="./icon-search.svg" alt="nav icon" className="search" />

      <input
        type="text"
        name="search-bar"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
