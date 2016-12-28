import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class Paginator extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    blockClass: 'paginator'
  };

  // static propTypes = {
  //   blockClass: PropTypes.string,
  // };

  render() {
    const { count, current, handleClick, blockClass } = this.props;
    const tempStyle = {
      float: 'left',
      width: '40px',
      textAlign: 'center',
      padding: '7px',
      borderRadius: '3px',
      border: '1px solid #999',
      background: '#EEE',
      cursor: 'pointer',
      marginRight: '5px' 
    };

    const pages = [];
    for (let i = 0; i < count; i++) {
      pages.push(<div
        style={tempStyle}
        onClick={() => handleClick(i)}
        key={i}
        id={i}>
        {i + 1}
      </div>)
    }

    return (
      <div style={{overflow: 'hidden', marginBottom: '20px'}} className={blockClass}>
        {pages}
      </div>
    );
  }
}

// TODO: to add PropTypes

export default Paginator;