import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loadData } from '../actions';

// Components
import Table from './Table';

// TODO: may be transfer to components?..
const Loader = props => <h1>Loading...</h1>;

// Main page component
export class Main extends React.Component {

  componentWillMount() {
    this.props.dispatch(loadData());
  }

  // render
  render() {

    const { music, children, isLoaded } = this.props;
    if (!isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <div className="page-home">
      	<Table musicList={music} />
      </div>
    );
  }
}

// export the connected class
const mapStateToProps = ({ musicBox: {music=[], isLoaded} }) => ({
  music,
  isLoaded
});

// TODO: to add PropTypes

export default connect(mapStateToProps)(Main);
