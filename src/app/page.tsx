import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import "../sidebar.css";
import "./page.css";
import "../searchbar.css";
import "../trending-card.css";
import TrendingCardList from "@/components/trending-card-list";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar />
        <div className="trending-card-list-container">
          <p className="trending-title">Trending</p>
          <TrendingCardList />
        </div>
      </div>
    </main>
  );
}
