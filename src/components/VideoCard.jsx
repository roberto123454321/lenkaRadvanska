import "./VideoCard.css";

export default function VideoCard({ url }) {
  return (
    <div className="iframe-container">
      <iframe
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  );
}
