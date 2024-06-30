import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";

import TrendingCardList from "@/components/trending-card-list";
import MediaCardList from "@/components/media-card-list";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for movies or TV series" />
        <div className="trending-card-list-container">
          <p className="trending-title">Trending</p>
          <TrendingCardList />
        </div>
        <div className="media-card-list-container">
          <p className="media-title">Recommended for you</p>
          <MediaCardList type="all" />
        </div>
      </div>
    </main>
  );
}
