import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";

export default function TVSeries() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar
          placeholder="Search for TV series"
          setFilter={() => console.log("hello")}
          filter=""
        />
        <div className="media-card-list-container">
          <p className="media-title">TV Series</p>
          <MediaCardList type="tv" filter="" />
        </div>
      </div>
    </main>
  );
}
