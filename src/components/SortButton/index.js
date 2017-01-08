import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class SortButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  static defaultProps = {
    // TODO: to add CSSModules
    className: 'sort-button',
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    active: React.PropTypes.bool
  };

  handleClick() {
    const { onClick, id } = this.props;
    let { direction } = this.state;
    direction = (direction === 1) ? -1 : 1;
    this.setState({
      direction
    });
    onClick(id, direction);
  }

  render() {
    const {
      onClick,
      className,
      children,
      active
    } = this.props;
    const { direction } = this.state;
    
    const textClass = `${className}__text`;
    const arrowsClass = cx({
      [`${className}__arrows`]: true,
      [`${className}__arrows_up`]: (!!direction && active && direction === -1), 
      [`${className}__arrows_down`]: (!!direction && active && direction === 1), 
    });

    return (
      <div className={className} onClick={this.handleClick}>
        <span className={textClass}>{children}</span>
        <i className={arrowsClass}></i>
      </div>
    );
  }
}

export default SortButton;