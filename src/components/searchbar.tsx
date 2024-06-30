interface Props {
  placeholder: string;
}

export default function SearchBar(props: Props) {
  return (
    <div className="searchbar">
      <img src="./icon-search.svg" alt="nav icon" className="search" />

      <input type="text" name="search-bar" placeholder={props.placeholder} />
    </div>
  );
}
