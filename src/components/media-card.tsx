import { CardDetails } from "@/interfaces";

export default function MediaCard(props: CardDetails) {
  const category = props.category === "TV Series" ? "tv" : "movie";

  return (
    <div className="media-card">
      <div
        style={{ background: `url(${props.thumbnail.regular?.large})` }}
        className="bookmark"
      >
        <div className="play-button">
          <img src="./icon-play.svg" alt="play-icon" />
          <p>Play</p>
        </div>
        <div className="background-hover"></div>
        <div
          className={`bookmark-icon-container ${
            !!props.isBookmarked ? "no-hover" : ""
          }`}
        >
          <img
            className="bookmark-icon"
            src={`/icon-bookmark-${
              !!props.isBookmarked ? "full" : "empty"
            }.svg`}
            alt="bookmark-icon"
          />
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
