import { Component } from 'react'
import { connect } from 'react-redux';
import '../styles/ListElement.scss'
import {
  UpdateFilters as UpdateFiltersAction
} from "../../../actions/movieDataActions";
import {bindActionCreators} from "redux";
class ListElement extends Component {
  static count = 0;

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.id = `checkbox-${ListElement.count}`;
    ListElement.count += 1;
  }

  handleClick = () => {
    const { item, type, UpdateFilters } = this.props;
    UpdateFilters(item, type)
  }

  render() {
    const { item, type, movieData } = this.props;
    return (
      <li className='list-item' data-genre={type}>
        <div className="input-group align-items-center">
          <input
            type="checkbox"
            id={this.id}
            onClick={this.handleClick}
            checked={movieData.filter && movieData.filter.split('|').indexOf(item) > -1 && movieData.type === type}
          />
          <span className="list-item__checkmark"></span>
          <label htmlFor={this.id}>{item}</label>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    UpdateFilters: UpdateFiltersAction
  }, dispatch)
);

const mapStateToProps = state => ({
  movieData: state.movieData
});

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);