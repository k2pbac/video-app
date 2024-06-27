import SideBar from "@/sidebar";
import "../sidebar.css";
import "./page.css";
import "../searchbar.css";
import SearchBar from "@/searchbar";
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
