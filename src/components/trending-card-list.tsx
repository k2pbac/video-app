import TrendingCard from "./trending-card";
import { CardDetails } from "@/interfaces";
import data from "../../data.json";

function getCards(data: Array<CardDetails>): Array<typeof TrendingCard> {
  console.log(data[0]);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]["title"]);
  }
  return [];
}

export default function TrendingCardList() {
  const cards = getCards(data);

  return (
    <div>
      <TrendingCard
        thumbnail={{}}
        year={""}
        category={""}
        rating={""}
        title={""}
        isBookmarked={false}
        isTrending={false}
      />
    </div>
  );
}
