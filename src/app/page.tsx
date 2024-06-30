"use client";

import { useState } from "react";

import SideBar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";
import TrendingCardList from "@/components/trending-card-list";
import MediaCardList from "@/components/media-card-list";

export default function Home() {
  const [filter, setFilter] = useState<string>("");

  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar
          placeholder="Search for movies or TV series"
          setFilter={(filter) => setFilter(filter)}
          filter={filter}
        />
        {!filter ? (
          <div className="trending-card-list-container">
            <p className="trending-title">Trending</p>
            <TrendingCardList />
          </div>
        ) : null}
        <div className="media-card-list-container">
          <p className="media-title">
            {!filter
              ? "Recommended for you"
              : `Found 2 results for '${filter}'`}
          </p>
          <MediaCardList type="all" filter={filter} />
        </div>
      </div>
    </main>
  );
}
