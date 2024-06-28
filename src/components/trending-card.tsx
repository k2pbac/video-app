interface CardDetails {
  image: string;
  year: number | string;
  type: string;
  rating: string;
  title: string;
}
export default function TrendingCard(props: CardDetails) {
  return <div className="trending-card"></div>;
}
