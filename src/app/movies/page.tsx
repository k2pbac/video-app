"use client";
import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";
import useMediaStore from "@/state";
import { useEffect } from "react";

export default function Movies() {
  const { setFilter } = useMediaStore((state) => state);

  useEffect(() => {
    setFilter("", "movies");
  }, []);

  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for movies" />
        <div className="media-card-list-container">
          <p className="media-title">Movies</p>
          <MediaCardList />
        </div>
      </div>
    </main>
  );
}
