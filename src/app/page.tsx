import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import "../sidebar.css";
import "./page.css";
import "../searchbar.css";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar />
      </div>
    </main>
  );
}
