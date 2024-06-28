"use client";

import TrendingCard from "./trending-card";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { CardDetails } from "@/interfaces";

export default function TrendingCardList() {
  function getTrendingCards(data: CardDetails[]): Array<React.ReactElement> {
    const cards: Array<React.ReactElement> = [];

    for (let i = 0; i < data.length; i++) {
      if (!!data[i].isTrending) {
        cards.push(
          <TrendingCard
            year={data[i].year}
            category={data[i].category}
            rating={data[i].rating}
            title={data[i].title}
            thumbnail={data[i].thumbnail}
            isBookmarked={false}
            isTrending={false}
          />
        );
      }
    }
    return cards;
  }

  return <div className="trending-card-list">{getTrendingCards(data)}</div>;
}
