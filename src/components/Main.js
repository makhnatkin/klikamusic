import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loadData, setPage, setPageCount } from '../actions';

// Components
import Table from './Table/';
import Paginator from './Paginator/';
import RowCounter from './RowCounter/';

// TODO: may be transfer to components?..
const Loader = props => <h1>Loading...</h1>;

// Main page component
export class Main extends React.Component {

  componentWillMount() {
    this.props.dispatch(loadData());
  }

  // render
  render() {
    const { music, children, isLoaded, pagesCount, page, dispatch, counts, rowsCount } = this.props;
    if (!isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <div className="page-home">
        <Table data={music} />
        <Paginator
          count={pagesCount}
          current={page}
          handleClick={page => dispatch(setPage(page))}
        />
        <RowCounter
          counts={counts}
          current={rowsCount}
          handleClick={count => dispatch(setPageCount(count))}
        />

      </div>
    );
  }
}

// export the connected class
const mapStateToProps = ({ musicBox }) => ({ ...musicBox });

// TODO: to add PropTypes

export default connect(mapStateToProps)(Main);
