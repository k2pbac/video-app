import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";

export default function Bookmarks() {
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar />
      </div>
    </main>
  );
}
