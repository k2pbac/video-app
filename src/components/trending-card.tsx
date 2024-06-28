import { CardDetails } from "@/interfaces";

export default function TrendingCard(props: CardDetails) {
  const category = props.category === "TV Series" ? "tv" : "movie";

  return (
    <div
      className="trending-card"
      style={{ background: `url(${props.thumbnail.trending?.large})` }}
    >
      <div className="bookmark">
        <div>
          <img src="/icon-bookmark-empty.svg" alt="bookmark-icon" />
        </div>
      </div>
      <div className="info">
        <div className="top-row">
          <p className="year">
            {props.year} <span className="dot"></span>
          </p>
          <p className="category">
            <img src={`/icon-category-${category}.svg`} alt="category-cion" />
            {props.category}{" "}
          </p>
          <p className="year">
            <span className="dot-2"></span> {props.rating}
          </p>
        </div>
        <p className="title">{props.title}</p>
      </div>
    </div>
  );
}
