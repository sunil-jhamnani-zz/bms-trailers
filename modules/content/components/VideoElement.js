import '../styles/VideoElement.scss';
import { connect } from 'react-redux';
import MovieTag from './MovieTag'
import '../../../assets/images/icons/thumb.svg';
import {MONTH_NAMES} from "../../../constants";
import '../../../assets/images/icons/calender.svg'

class VideoElement extends React.Component {

  getMovieDetails = (movieId) => {
    const { movieData } = this.props;
    return movieData.movies[movieId]
  }

  render() {
    const { movieId } = this.props;
    const movieDetails = this.getMovieDetails(movieId);
    const key = movieDetails.TrailerURL.split("v=")[1].split('&')[0];
    const url = `https://www.youtube.com/embed/${key}`;
    const releaseDate = new Date(movieDetails.ShowDate);

    return (
      <div className="video-element row d-flex">
        <div className="col-sm-7 video-element__video">
          <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen />
        </div>
        <div className="col video-element__movie-details">
          <h3>{movieDetails.EventName}</h3>
          <p>{movieDetails.EventLanguage}</p>
          {
            movieDetails.EventGenre.split('|').map(tag => (<MovieTag name={tag}/>))
          }
          <div className="video-element__likes-votes d-flex align-items-center">
            <div className="">
              <svg className="video-element__like-img">
                <use xlinkHref="#thumb" />
              </svg>
            </div>
            <div className="content">
              <p className="video-element__likes">{`${movieDetails.wtsPerc}%`}</p>
              <p className="video-element__votes">
                {`${movieDetails.csCount} vote(s)`}
              </p>
            </div>
            <div className="video-element__calender-icon">
              <svg className="video-element__like-img">
                <use xlinkHref="#calender" />
              </svg>
            </div>
            <div className="content">
              <p className="video-element__release-month">{MONTH_NAMES[releaseDate.getMonth()]}</p>
              <p className="video-element__release-year">
                {releaseDate.getFullYear()}
              </p>
            </div>
          </div>
          <div className="video-element__footer">

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieData: state.movieData
});

export default connect(mapStateToProps, null)(VideoElement);
