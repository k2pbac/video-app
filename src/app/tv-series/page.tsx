"use client";
import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";
import useMediaStore from "@/state";
import { useEffect } from "react";

export default function TVSeries() {
  const { setFilter } = useMediaStore((state) => state);

  useEffect(() => {
    setFilter("", "tv-series");
  }, []);
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for TV series" />
        <div className="media-card-list-container">
          <p className="media-title">TV Series</p>
          <MediaCardList />
        </div>
      </div>
    </main>
  );
}
