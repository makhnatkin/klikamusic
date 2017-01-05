import React from 'react';
import './style.scss';
import cx from 'classnames';

import Button, { modificators } from '../Button/';

// Table component
export class Paginator extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    className: 'paginator',
    distance: 2
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    count: React.PropTypes.number,
    visibleCount: React.PropTypes.number,
    current: React.PropTypes.number,
    handleClick: React.PropTypes.func,
  };

  renderArrowButton(direction) {
    const { current, handleClick } = this.props;
    const x = direction === 'right' ? 1 : -1;

    return <Button
      onClick={() => handleClick(current + x)}
      mod={[modificators.arrow[direction], modificators.float]}
      key={direction}
    />
  }

  renderNumberButtons(i) {
    const { handleClick, current } = this.props;

    return <Button
      active={current === i}
      onClick={() => handleClick(i)}
      mod={[modificators.float]}
      key={i}
      id={i}>
      {i + 1}
    </Button>
  }

  render() {  
    const {
      className,
      count,
      current
    } = this.props;
    let { distance } = this.props;

    let leftArrow;
    let rightArrow;
    const numbers = [];

    if (2 * distance + 1 >= count) {
      for (let i = 0; i < count; i++) {
        numbers.push(this.renderNumberButtons(i))
      }      
    
    // many numbers
    } else {
      if (current > 1) {
        leftArrow = this.renderArrowButton('left');
      }

      let start = current - distance;
      if (start < 0) {
        start = 0;
      }

      let end = start + 1 + (2 * distance);
      while (end > Math.ceil(count)) {
        end--;
        start--;
      }

      for (let i = start; i < end; i++) {
        numbers.push(this.renderNumberButtons(i))
      }

      if (current < count - 2) {
        rightArrow = this.renderArrowButton('right');
      }
    }

    return (
      <div className={className}>
        {leftArrow}
        <div className={`${className}__numbers`}>
          {numbers}
        </div>
        {rightArrow}
      </div>
    );
  }
}

export default Paginator;