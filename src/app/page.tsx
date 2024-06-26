import SideBar from "@/sidebar";
import "../sidebar.css";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <SideBar />
    </main>
  );
}
