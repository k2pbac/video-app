"use client";

import data from "../../data.json";
import { CardDetails } from "@/interfaces";
import MediaCard from "./media-card";

export default function MediaCardList() {
  function getMediaCards(data: CardDetails[]): Array<React.ReactElement> {
    const cards: Array<React.ReactElement> = [];

    for (let i = 0; i < data.length; i++) {
      if (!data[i].isTrending) {
        cards.push(
          <MediaCard
            key={data[i].title + "is-trending"}
            year={data[i].year}
            category={data[i].category}
            rating={data[i].rating}
            title={data[i].title}
            thumbnail={data[i].thumbnail}
            isBookmarked={data[i].isBookmarked}
            isTrending={false}
          />
        );
      }
    }
    return cards;
  }

  return <div className="media-card-list">{getMediaCards(data)}</div>;
}
