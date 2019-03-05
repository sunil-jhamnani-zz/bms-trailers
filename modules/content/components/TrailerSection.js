import { lazyload } from 'react-lazyload';
import { connect } from 'react-redux';
import '../styles/TrailerSection.scss';
import { IMAGE_API_URL, MONTH_NAMES } from '../../../constants'
import '../../../assets/images/icons/thumb.svg';
import PlayButton from './PlayButton';
import { bindActionCreators } from "redux";
import {
  ToggleVideoState as ToggleVideoStateAction
} from "../../../actions/movieDataActions";

@lazyload({
  height: 200,
  once: true,
  offset: 10
})
class TrailerSection extends React.Component {

  handlePlay = () => {
    const { ToggleVideoState, movieInfo } = this.props;
    ToggleVideoState(movieInfo.EventCode);
  }

  render() {
    const { movieInfo } = this.props;
    const releaseDate = new Date(movieInfo.ShowDate);
    return (
      <div className="trailer-section" id={movieInfo.EventCode}>
        <div className="trailer-section__container">
          <img src={`${IMAGE_API_URL}/${movieInfo.EventCode}.jpg`} />
          <div className="trailer-section__release-date">
            <p>{releaseDate.getDate()}</p>
            <p>{MONTH_NAMES[releaseDate.getMonth()]}</p>
          </div>
          <div className="trailer-section__likes-votes">
            {
              movieInfo.wtsPerc && (<p className="trailer-section__likes">
              <svg className="trailer-section__like-img">
                <use xlinkHref="#thumb" />
              </svg>
              {`${movieInfo.wtsPerc}%`}
            </p>)
            }
            <p className="trailer-section__votes">
              {`${movieInfo.csCount} vote(s)`}
            </p>
          </div>
          <PlayButton buttonHandler={this.handlePlay} />
        </div>
        <div className="trailer-section__title-container">
          <p className="trailer-section__title">{movieInfo.EventTitle}</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ToggleVideoState: ToggleVideoStateAction
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(TrailerSection);