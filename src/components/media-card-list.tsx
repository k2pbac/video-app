"use client";

import { useEffect } from "react";
import useMediaStore from "../state/index";

import { getBookmarkCards, getMediaCards } from "@/helpers";

export default function MediaCardList(props: { type?: string }) {
  const {
    data,
    filterData,
    filter,
    filterBookmarkData,
    setFilteredData,
    setBookmarkFilteredData,
    bookmarkedData,
  } = useMediaStore((state) => state);

  useEffect(() => {
    if (filter.page === "bookmarks") {
      setBookmarkFilteredData(filterBookmarkData(filter));
    } else {
      setFilteredData(filterData(filter));
    }
  }, [filter.page, filter.search]);

  return (
    <div className="media-card-list">
      {filter.page === "bookmarks" &&
        props.type === "movies" &&
        getBookmarkCards(bookmarkedData).movies}

      {filter.page === "bookmarks" &&
        props.type === "tv" &&
        getBookmarkCards(bookmarkedData).tv}

      {filter.page !== "bookmarks" && getMediaCards(data)}
    </div>
  );
}
