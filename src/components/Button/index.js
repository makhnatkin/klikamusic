import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class Button extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    className: 'button',
    float: false
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    float: React.PropTypes.bool
  };

  render() {
    const { onClick, className, float, children } = this.props;

    const blockClass = cx({
      [`${className}`]: true,
      [`${className}_float`]: float
    });

    return (
      <div className={blockClass} onClick={onClick}>
        {children}
      </div>
    );
  }
}

export default Button;