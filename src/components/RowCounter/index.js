import React from 'react';
import './style.scss';
import cx from 'classnames';

import Button from '../Button/';

// Table component
export class RowCounter extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    className: 'row-counter'
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    counts: React.PropTypes.array,
    current: React.PropTypes.number,
    handleClick: React.PropTypes.func,
  };

  render() {
    const { counts, current, handleClick, className } = this.props;

    const countsComponent = counts.map(count => <Button
      onClick={() => handleClick(count)}
      float={true}
      key={count}
      id={count}>
      {count}
    </Button>)

    return (
      <div style={{overflow: 'hidden'}} className={className}>
        {countsComponent}
      </div>
    );
  }
}

export default RowCounter;