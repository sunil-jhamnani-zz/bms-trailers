import TrailerSection from './TrailerSection';
import { connect } from 'react-redux';
import '../styles/TrailersList.scss';
import { Fragment } from 'react';
import VideoElement from './VideoElement'

class TrailersList extends React.Component {
  constructor(props) {
    super(props);
    // const { moviesList } = props;
    // const keyPairs = [];
    // let arr = Object.keys(moviesList);
    // arr = arr.filter(key => this.checkIfInFilter);
    // while (arr.length) {
    //   keyPairs.push(arr.splice(0,6))
    // }
    // this.state = {
    //   allKeysArray: keyPairs
    // }
  }

  checkIfInFilter = (key) => {
    const { moviesList, movieDataReducer } = this.props;
    let movieInfo = moviesList[key];
    if (movieDataReducer.filter) {
      let filters = movieDataReducer.filter.split('|');
      if (filters.some(filter => movieInfo[movieDataReducer.type] === filter)) {
        return true;
      }
      return false;
    }
    return true
  }

  getAllKeys = () => {
    const { moviesList } = this.props;
    const keyPairs = [];
    let arr = Object.keys(moviesList);
    arr = arr.filter(key => {
      return this.checkIfInFilter(key)
    });
    while (arr.length) {
      keyPairs.push(arr.splice(0,6))
    }
    return keyPairs;
  }

  render() {
    const allKeysArray = this.getAllKeys();
    const { moviesList, movieDataReducer } = this.props;
    return (
      <div className="all-trailers container-fluid">
        {
          allKeysArray.map(keysList => (
            <Fragment>
              {
                (keysList.indexOf(movieDataReducer.movieId) > -1) && (<VideoElement movieId={movieDataReducer.movieId}/>)
              }
              <div className="row" key={keysList.join('')}>
                {
                  keysList.map(key => {
                    let movieInfo = moviesList[key];
                    return (movieInfo && <TrailerSection
                      key={key}
                      movieInfo={movieInfo}
                    />)
                  })
                }
              </div>
            </Fragment>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieDataReducer: state.movieData
});

export default connect(mapStateToProps, null)(TrailersList);
