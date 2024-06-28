import { CardDetails } from "@/interfaces";

export default function TrendingCard(props: CardDetails) {
  return (
    <div
      className="trending-card"
      style={{ background: `url(${props.thumbnail.trending?.large})` }}
    >
      <p>{props.year}</p>
      {/* <img src={props.thumbnail["trending"]["small"]} /> */}
    </div>
  );
}
