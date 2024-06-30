import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";

export default function Bookmarks() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for bookmarked shows" />
        <div className="media-card-list-container">
          <p className="media-title">Bookmarked Movies</p>
          <MediaCardList type="bookmarked-movies" />
        </div>
        <div className="media-card-list-container">
          <p className="media-title">Bookmarked TV Series</p>
          <MediaCardList type="bookmarked-tv" />
        </div>
      </div>
    </main>
  );
}
