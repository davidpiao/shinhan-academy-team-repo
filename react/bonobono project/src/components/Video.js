import "../styles/Video.css";

const Video = () => {
  return (
    <div className="video">
      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/Fx7Bdm7LCzc"
        title="신한DS 창립 30주년 기념 영상"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Video;
