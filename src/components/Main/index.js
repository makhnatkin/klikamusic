import React from 'react';
import './style.scss';
import cx from 'classnames';

import { connect } from 'react-redux';

// Actions
import {
  loadData,
  setPage,
  setPageCount,
  sortBy
} from '../../actions';

// Components
import Table from '../Table/';
import Paginator from '../Paginator/';
import RowCounter from '../RowCounter/';

const Loader = props => <h1>Loading...</h1>;

// Main page component
export class Main extends React.Component {

  static defaultProps = {
    className: 'page-home'
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.props.dispatch(loadData());
  }

  // render
  render() {
    const {
      music,
      children,
      isLoaded,
      pagesCount,
      page,
      dispatch,
      counts,
      rowsCount,
      sortId,
      className
    } = this.props;
    
    if (!isLoaded) {
      return (
        <Loader />
      );
    }

    const [
      blockClass,
      contentClass,
      footerClass,
      footerLeftClass,
      footerRightClass
    ] = [
      className,
      `${className}__content`,
      `${className}__footer`,
      `${className}__footer-left`,
      `${className}__footer-right`
    ];

    return (
      <div className={blockClass}>
        <div className={contentClass}>
          <Table data={music} sortId={sortId} handleHeadCellClick={(id, direction) => dispatch(sortBy(id, direction))} />
        </div>

        <div className={footerClass}>
          <div className={footerRightClass}>
            <RowCounter
              counts={counts}
              current={rowsCount}
              handleClick={count => dispatch(setPageCount(count))}
            />
          </div>

          <div className={footerLeftClass}>
            <Paginator
              count={pagesCount}
              current={page}
              handleClick={page => dispatch(setPage(page))}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

// export the connected class
const mapStateToProps = ({ musicBox }) => ({ ...musicBox });

// TODO: to add PropTypes

export default connect(mapStateToProps)(Main);
