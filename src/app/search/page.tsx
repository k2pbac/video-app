"use client";

import MediaCardList from "@/components/media-card-list";
import SearchBar from "@/components/searchbar";
import SideBar from "@/components/sidebar";
import useMediaStore from "@/state";

export default function Search() {
  const { filter, data } = useMediaStore((state) => state);

  return (
    <main className="flex min-h-screen items-center">
      <SideBar />
      <div className="content">
        <SearchBar placeholder="Search for movies or TV series" />
        <div className="media-card-list-container">
          <p className="media-title">
            {!filter.search
              ? "Recommended for you"
              : `Found ${data.length} results for ‘${filter.search}’`}
          </p>
          <MediaCardList />
        </div>
      </div>
    </main>
  );
}
