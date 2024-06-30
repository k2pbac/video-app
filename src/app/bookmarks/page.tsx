"use client";

import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";
import useMediaStore from "@/state";
import { useEffect } from "react";

export default function Bookmarks() {
  const { setFilter } = useMediaStore((state) => state);

  useEffect(() => {
    setFilter("", "bookmarks");
  }, []);
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for bookmarked shows" />
        <div className="media-card-list-container">
          <p className="media-title">Bookmarked Movies</p>
          <MediaCardList type="movies" />
        </div>
        <div className="media-card-list-container">
          <p className="media-title">Bookmarked TV Series</p>
          <MediaCardList type="tv" />
        </div>
      </div>
    </main>
  );
}
