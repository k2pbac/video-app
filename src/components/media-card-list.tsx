"use client";

import data from "../../data.json";
import { CardDetails } from "@/interfaces";
import MediaCard from "./media-card";

interface Props {
  type: string;
  filter: string;
}

export default function MediaCardList(props: Props) {
  function getMediaCards(data: CardDetails[]): Array<React.ReactElement> {
    const cards: Array<React.ReactElement> = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      console.log(element.title.includes(props.filter));
      if (
        (props.filter && element.title.includes(props.filter)) ||
        (!element.isTrending && props.type === "all") ||
        (props.type === "movies" && element.category !== "TV Series") ||
        (props.type === "tv" && element.category !== "Movie") ||
        (props.type === "bookmarked-movies" &&
          !!element.isBookmarked &&
          element.category === "Movie") ||
        (props.type === "bookmarked-tv" &&
          !!element.isBookmarked &&
          element.category === "TV Series")
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
