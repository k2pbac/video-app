"use client";

import useMediaStore from "../state/index";

import { getBookmarkCards, getMediaCards } from "@/helpers";

export default function MediaCardList(props: { type?: string }) {
  const { data, filterData, filter, filterBookmarkData } = useMediaStore(
    (state) => state
  );

  return (
    <div className="media-card-list">
      {filter.page === "bookmarks" &&
        props.type === "movies" &&
        getBookmarkCards(filterBookmarkData(data, filter)).movies}

      {filter.page === "bookmarks" &&
        props.type === "tv" &&
        getBookmarkCards(filterBookmarkData(data, filter)).tv}

      {filter.page !== "bookmarks" && getMediaCards(filterData(data, filter))}
    </div>
  );
}
