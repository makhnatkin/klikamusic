import React from 'react';
import cx from 'classnames';

// Table component
export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  static defaultProps = {
    // TODO: to add CSSModules
    className: 'select'
  };

  static propTypes = {
    className: React.PropTypes.string,
    list: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func
  };

  handleChange({ target: { value } }) {
    this.setState({value});
    this.props.onChange(value);
  }

  render() {
    const { className, list } = this.props;
    const { value } = this.state;
    
    const blockClass = cx({
      [`${className}`]: true,
    });

    return (
      <div className={blockClass}>
        <select onChange={this.handleChange} value={value}>
          <option key="all" value="all">Все</option>
          {list.map(item => <option key={item} value={item}>
            {item}
          </option>)}
        </select>
      </div>
    );
  }
}

export default Select;