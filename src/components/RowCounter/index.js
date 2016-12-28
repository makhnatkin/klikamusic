import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class RowCounter extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    blockClass: 'row-counter'
  };

  // static propTypes = {
  //   blockClass: PropTypes.string,
  // };

  render() {
    const { counts, current, handleClick, blockClass } = this.props;
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

    const countsComponent = counts.map(count => <div
      style={tempStyle}
      onClick={() => handleClick(count)}
      key={count}
      id={count}>
      {count}
    </div>)

    return (
      <div style={{overflow: 'hidden'}} className={blockClass}>
        {countsComponent}
      </div>
    );
  }
}

// TODO: to add PropTypes

export default RowCounter;