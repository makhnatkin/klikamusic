import React from 'react';
import './style.scss';
import cx from 'classnames';

import Button from '../Button/';

// Table component
export class Paginator extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    className: 'paginator'
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    count: React.PropTypes.number,
    current: React.PropTypes.number,
    handleClick: React.PropTypes.func,
  };

  render() {
    const { count, current, handleClick, className } = this.props;

    const pages = [];
    for (let i = 0; i < count; i++) {
      pages.push(
        <Button
          onClick={() => handleClick(i)}
          float={true}
          key={i}
          id={i}>
          {i + 1}
        </Button>
      )
    }

    return (
      <div style={{overflow: 'hidden', marginBottom: '20px'}} className={className}>
        {pages}
      </div>
    );
  }
}

export default Paginator;