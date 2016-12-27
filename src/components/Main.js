import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loadData, setPage } from '../actions';

// Components
import Table from './Table/';
// import Paginator from './Paginator/';

// TODO: may be transfer to components?..
const Loader = props => <h1>Loading...</h1>;

// Main page component
export class Main extends React.Component {

  componentWillMount() {
    this.props.dispatch(loadData());
  }

  // TODO: to create paginator component
  renderPaginator() {
    const { pagesCount: count, dispatch } = this.props;
    const tempStyle = {
      float: 'left',
      width: '40px',
      textAlign: 'center',
      padding: '7px',
      borderRadius: '3px',
      border: '1px solid #999',
      background: '#EEE',
      cursor: 'pointer',
      marginRight: '5px' 
    };
    const pages = [];
    for (let i = 0; i < count; i++) {
      pages.push(<div
        style={tempStyle}
        onClick={() => dispatch(setPage(i))}
        key={i}
        id={i}>
        {i + 1}
      </div>)
    }
    return pages;
  }

  // render
  render() {
    const { music, children, isLoaded, pagesCount, page } = this.props;
    if (!isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <div className="page-home">
      	<Table musicList={music} />
        {this.renderPaginator()}
      </div>
    );
  }
}

// export the connected class
const mapStateToProps = ({ musicBox }) => ({ ...musicBox });

// TODO: to add PropTypes

export default connect(mapStateToProps)(Main);
