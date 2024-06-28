export default function SideBar() {
  return (
    <div className="sidebar">
      <img src="./logo.svg" alt="nav icon" className="logo" />
      <div className="icon-group">
        <img src="./icon-nav-home.svg" alt="home icon" />
        <img src="./icon-nav-movies.svg" alt="movie icon" />
        <img src="./icon-nav-tv-series.svg" alt="tv icon" />
        <img src="./icon-nav-bookmark.svg" alt="bookmark icon" />
      </div>
      <img src="image-avatar.png" alt="avatar" className="avatar" />
    </div>
  );
}
