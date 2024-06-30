"use client";

import data from "../../data.json";
import { CardDetails } from "@/interfaces";
import MediaCard from "./media-card";

interface Props {
  type: string;
}

export default function MediaCardList(props: Props) {
  function getMediaCards(data: CardDetails[]): Array<React.ReactElement> {
    const cards: Array<React.ReactElement> = [];

    for (let i = 0; i < data.length; i++) {
      if (
        (!data[i].isTrending && props.type === "all") ||
        (props.type === "movies" && data[i].category !== "TV Series") ||
        (props.type === "tv" && data[i].category !== "Movie") ||
        (props.type === "bookmarked-movies" &&
          !!data[i].isBookmarked &&
          data[i].category === "Movie") ||
        (props.type === "bookmarked-tv" &&
          !!data[i].isBookmarked &&
          data[i].category === "TV Series")
      ) {
        cards.push(
          <MediaCard
            key={data[i].title + "is-trending"}
            year={data[i].year}
            category={data[i].category}
            rating={data[i].rating}
            title={data[i].title}
            thumbnail={data[i].thumbnail}
            isBookmarked={data[i].isBookmarked}
            isTrending={data[i].isTrending}
          />
        );
      }
    }
    return cards;
  }

  return <div className="media-card-list">{getMediaCards(data)}</div>;
}
