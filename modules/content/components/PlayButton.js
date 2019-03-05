import '../styles/PlayButton.scss';

const PlayButton = ({ buttonHandler }) => (
  <div className="play-button" onClick={buttonHandler}></div>
);

export default PlayButton;