import { create } from "zustand";
import data from "../../data.json";
import { CardDetails } from "@/interfaces";

interface Filter {
  search: string;
  page: string;
}

interface MediaState {
  data: CardDetails[];
  bookmarkedTvData?: CardDetails[];
  filter: Filter;
  filterData: (data: CardDetails[], filter: Filter) => CardDetails[];
  filterBookmarkData: (
    data: CardDetails[],
    filter: Filter
  ) => { movies: CardDetails[]; tv: CardDetails[] };
  setFilter: (search: string, page: string) => void;
}

const filterData = (data: CardDetails[], filter: Filter): CardDetails[] => {
  const pageFilter = filter.page;
  return data.filter((element) => {
    if (pageFilter === "all")
      return element.title.includes(filter.search) && !element.isTrending;
    else if (pageFilter === "movies")
      return (
        element.title.includes(filter.search) &&
        element.category !== "TV Series"
      );
    else if (pageFilter === "tv-series")
      return (
        element.title.includes(filter.search) && element.category !== "Movie"
      );
  });
};

const filterBookmarkData = (
  data: CardDetails[],
  filter: Filter
): { movies: CardDetails[]; tv: CardDetails[] } => {
  const movies: Array<CardDetails> = [];
  const tv: Array<CardDetails> = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (
      element.title.includes(filter.search) &&
      element.category === "Movie" &&
      element.isBookmarked
    )
      movies.push(element);
    else if (
      element.title.includes(filter.search) &&
      element.category === "TV Series" &&
      element.isBookmarked
    )
      tv.push(element);
  }
  return { movies: movies, tv: tv };
};

const useMediaStore = create<MediaState>()((set) => ({
  data: data,
  bookmarkedTvData: [],
  filter: { search: "", page: "all" },
  filterData: filterData,
  filterBookmarkData: filterBookmarkData,
  setFilter: (search: string, page: string) =>
    set((state) => ({ filter: { search: search, page: page } })),
}));

export default useMediaStore;
