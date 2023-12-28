/* eslint-disable react/prop-types */
import withHighlight from "./withHighlight";

const Video = (props) => {
  return (
    <div className="item item-video">
        <iframe src={props.url} allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p className="views">Просмотров: {props.views}</p>
    </div>
)
}

// export default Video
export const VideoWithHighlight = withHighlight(Video);