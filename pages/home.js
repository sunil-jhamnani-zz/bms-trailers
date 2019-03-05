import TrailersList from '../modules/content/components/TrailersList';
import { connect } from 'react-redux';
import Header from '../modules/layout/components/Header';
import fetch from 'isomorphic-unfetch';
import { bindActionCreators } from "redux";
import {
  StoreLanguages as StoreLanguagesAction,
  StoreMovies as StoreMoviesAction
} from "../actions/movieDataActions";
import { API_URL} from "../constants";
import '../modules/layout/styles/HomeLayout.scss'

class Home extends React.Component {
  state = {}

  static async getInitialProps() {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json);
    return {
      data: json
    }
  }

  componentDidMount() {
    const { data, StoreLanguages, StoreMovies } = this.props;
    StoreLanguages(data[0]);
    StoreMovies(data[1]);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="home-layout">
        <Header />
        <TrailersList moviesList={data[1]}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    StoreLanguages: StoreLanguagesAction,
    StoreMovies: StoreMoviesAction
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Home);