import { CardDetails } from "@/interfaces";
import MediaCard from "./components/media-card";

export function getMediaCards(data: CardDetails[]): Array<React.ReactElement> {
  const cards: Array<React.ReactElement> = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    cards.push(
      <MediaCard
        key={element.title + "is-trending"}
        year={element.year}
        category={element.category}
        rating={element.rating}
        title={element.title}
        thumbnail={element.thumbnail}
        isBookmarked={element.isBookmarked}
        isTrending={element.isTrending}
      />
    );
  }
  return cards;
}

export function getBookmarkCards(data: {
  movies: CardDetails[];
  tv: CardDetails[];
}): { movies: Array<React.ReactElement>; tv: Array<React.ReactElement> } {
  const movieCards: Array<React.ReactElement> = [];
  const tvCards: Array<React.ReactElement> = [];
  for (let i = 0; i < data.movies.length; i++) {
    const element = data.movies[i];
    movieCards.push(
      <MediaCard
        key={element.title + "is-trending"}
        year={element.year}
        category={element.category}
        rating={element.rating}
        title={element.title}
        thumbnail={element.thumbnail}
        isBookmarked={element.isBookmarked}
        isTrending={element.isTrending}
      />
    );
  }
  for (let i = 0; i < data.tv.length; i++) {
    const element = data.tv[i];
    tvCards.push(
      <MediaCard
        key={element.title + "is-trending"}
        year={element.year}
        category={element.category}
        rating={element.rating}
        title={element.title}
        thumbnail={element.thumbnail}
        isBookmarked={element.isBookmarked}
        isTrending={element.isTrending}
      />
    );
  }

  return { movies: movieCards, tv: tvCards };
}
