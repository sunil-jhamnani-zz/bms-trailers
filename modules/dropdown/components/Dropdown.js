import { Component } from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../styles/Dropdown.scss';
import '../../../assets/images/icons/caret.svg';
import ListElement from "../../dropdown/components/ListElement";


class Dropdown extends Component {
  state = {
    isOpen: false
  }

  filterListRef = React.createRef()

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
  }

  onOutsideClick = (event) => {
    const { isOpen } = this.state;
    if (isOpen && !this.filterListRef.current.contains(event.target)) {
      this.toggleDropdown();
    }
  }

  handleClick = () => {
    this.toggleDropdown();
  }

  handleKeyUp = (event) => {
    if (event.which === 13) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {
      className,
      title,
      data,
      type
    } = this.props;
    const dataList = data && data.map(entity => (<ListElement key={entity.toLowerCase()} item={entity} type={type} />));
    const { isOpen } = this.state;

    return (
      <div
        className={classNames('dropdown', {
          'is-open': isOpen,
          className
        })}
        ref={this.filterListRef}
      >
        <div
          className="dropdown__head"
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          role="button"
          tabIndex="0"
        >
          <span className="dropdown__selections">{title}</span>
          <span className="dropdown__caret">
            <svg className="dropdown__caret-img">
              <use xlinkHref="#caret" />
            </svg>
          </span>
        </div>
        { isOpen && (
          <div
            className="dropdown__content"
          >
            <ul className="dropdown__dd-list">
              {
                dataList
              }
            </ul>
          </div>
        ) }
      </div>
    );
  }
}

// Dropdown.propTypes = {
//   icon: PropTypes.string,
//   text: PropTypes.string,
//   modifiers: PropTypes.arrayOf(PropTypes.string),
//   showNotch: PropTypes.bool,
//   headerElement: PropTypes.node,
//   children: PropTypes.node.isRequired
// };
//
// Dropdown.defaultProps = {
//   icon: '',
//   text: '',
//   modifiers: [],
//   showNotch: false,
//   headerElement: null
// };

export default Dropdown;
