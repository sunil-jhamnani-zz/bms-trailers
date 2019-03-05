import generateTagColor from '../../../utils/generateTagColor';

import '../styles/MovieTag.scss';

const MovieTag = ({ name }) => (
  <div
    className="movie-tag"
    style={{
      backgroundColor: generateTagColor()
    }}
  >
    {name}
  </div>
);

export default MovieTag;