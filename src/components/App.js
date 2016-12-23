import React from "react";
import { connect } from "react-redux";
import "../stylesheets/main.scss";

// Actions
import { loadData } from '../actions';

// TODO: may be transfer to components?..
const Loader = props => <h1>Loading...</h1>;

// App component
export class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadData());
  }

  render() {
    const { music, children } = this.props;
    if (!music.length) {
      return (
        <Loader />
      );
    }

    return (
      <div className="container">
        {children}
      </div>
    );
  }
}

// export the connected class
const mapStateToProps = ({ music=[] }) => ({
  music,
});

export default connect(mapStateToProps)(App);