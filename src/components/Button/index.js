import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class Button extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    className: 'button',
    active: false
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    mod: React.PropTypes.array,
    active: React.PropTypes.bool
  };

  render() {
    const {
      onClick,
      className,
      children,
      mod,
      active
    } = this.props;
    
    let modificators = '';
    if (mod instanceof Array && mod.length > 0) {
      mod.forEach(modificator => {
        modificators += ` ${className}_${modificator}`
      });
    }

    const blockClass = cx({
      [`${className}`]: true,
      [`${modificators}`]: !!modificators,
      [`${className}_active`]: active
    });

    return (
      <div className={blockClass} onClick={onClick}>
        {children}
      </div>
    );
  }
}

export const modificators = {
  arrow: {
    left: 'left',
    right: 'right'
  },
  float: 'float'
};

export default Button;