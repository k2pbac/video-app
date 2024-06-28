"use client";

import TrendingCard from "./trending-card";
import data from "../../data.json";
import { CardDetails } from "@/interfaces";

export default function TrendingCardList() {
  function getTrendingCards(data: CardDetails[]): Array<React.ReactElement> {
    const cards: Array<React.ReactElement> = [];

    for (let i = 0; i < data.length; i++) {
      if (!!data[i].isTrending) {
        cards.push(
          <TrendingCard
            key={data[i].title + "is-trending"}
            year={data[i].year}
            category={data[i].category}
            rating={data[i].rating}
            title={data[i].title}
            thumbnail={data[i].thumbnail}
            isBookmarked={data[i].isBookmarked}
            isTrending={true}
          />
        );
      }
    }
    return cards;
  }

  return <div className="trending-card-list">{getTrendingCards(data)}</div>;
}
