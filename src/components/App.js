import React from 'react';

// App component
export class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

// TODO: to add PropTypes

export default App;