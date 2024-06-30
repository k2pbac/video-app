"use client";

import { useEffect, useState } from "react";

import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import TrendingCardList from "@/components/trending-card-list";
import MediaCardList from "@/components/media-card-list";
import useMediaStore from "@/state";

export default function Home() {
  const { setFilter, filter } = useMediaStore((state) => state);

  useEffect(() => {
    setFilter("", "all");
  }, []);
  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for movies or TV series" />
        {!filter.search ? (
          <div className="trending-card-list-container">
            <p className="trending-title">Trending</p>
            <TrendingCardList />
          </div>
        ) : null}
        <div className="media-card-list-container">
          <p className="media-title">
            {!filter.search
              ? "Recommended for you"
              : `Found 2 results for '${filter}'`}
          </p>
          <MediaCardList />
        </div>
      </div>
    </main>
  );
}
