interface Thumbnail {
  regular?: RegularThumbnail;
  trending?: TrendingThumbnail;
}

interface RegularThumbnail {
  small?: string;
  medium?: string;
  large?: string;
}

interface TrendingThumbnail {
  small?: string;
  medium?: string;
  large?: string;
}

export interface CardDetails {
  year: number | string;
  category: string;
  rating: string;
  title: string;
  thumbnail: Thumbnail;
  isBookmarked: boolean;
  isTrending: boolean;
}
