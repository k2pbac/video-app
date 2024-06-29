"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <img src="./logo.svg" alt="nav icon" className="logo" />
      <div className="icon-group">
        <Link href="/">
          <img
            className={`${pathname === "/" ? "page-accessed" : ""}`}
            src="./icon-nav-home.svg"
            alt="home icon"
          />
        </Link>
        <Link href="/movies">
          <img
            className={`${pathname === "/movies" ? "page-accessed" : ""}`}
            src="./icon-nav-movies.svg"
            alt="movie icon"
          />
        </Link>
        <Link href="/tv-series">
          <img
            className={`${pathname === "/tv" ? "page-accessed" : ""}`}
            src="./icon-nav-tv-series.svg"
            alt="tv icon"
          />
        </Link>
        <Link href="/bookmarks">
          <img
            className={`${pathname === "/bookmarks" ? "page-accessed" : ""}`}
            src="./icon-nav-bookmark.svg"
            alt="bookmark icon"
          />
        </Link>
      </div>
      <img src="image-avatar.png" alt="avatar" className="avatar" />
    </div>
  );
}
