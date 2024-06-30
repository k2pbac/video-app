import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";

export default function Movies() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar
          placeholder="Search for movies"
          setFilter={() => console.log("hello")}
          filter=""
        />
        <div className="media-card-list-container">
          <p className="media-title">Movies</p>
          <MediaCardList type="movies" filter="" />
        </div>
      </div>
    </main>
  );
}
