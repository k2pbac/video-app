import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import TrendingCard from "@/components/trending-card";
import "../sidebar.css";
import "./page.css";
import "../searchbar.css";
import "../trending-card.css";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar />
        <div className="trending-card-list">
          <p>Trending</p>
          <TrendingCard image={""} year={""} type={""} rating={""} title={""} />
        </div>
      </div>
    </main>
  );
}
