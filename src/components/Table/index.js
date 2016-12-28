import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class Table extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    blockClass: 'music-table'
  };

  // static propTypes = {
  //   blockClass: PropTypes.string,
  // };

  renderRows(musicList=[], classes={}) {
    const { firstCell, row, cell, lastCell } = classes;
    if (musicList.length < 1) {
      return null;
    }
    return musicList.map(({ id, artist, track, genre, year }) =>
      <tr className={row} key={id}>
        <td className={firstCell}>{id}</td>
        <td className={cell}>{artist}</td>
        <td className={cell}>{track}</td>
        <td className={cell}>{genre}</td>
        <td className={lastCell}>{year}</td>
      </tr>);
  }

  render() {
    const { blockClass, children, musicList } = this.props;
    
    // classes (BEM)
    const classes = {
      table: `${blockClass}__table`,
      headRow: `${blockClass}__head-row`,
      headCell: `${blockClass}__head-cell`,
      row: `${blockClass}__row`,
      cell: `${blockClass}__cell`,
      firstCell: cx({
        [`${blockClass}__cell`]: true,
        [`${blockClass}__cell_first`]: true
      }),
      lastCell: cx({
        [`${blockClass}__cell`]: true,
        [`${blockClass}__cell_last`]: true
      }),
      // TODO: to optimize classnaming
      firstHeadCell: cx({
        [`${blockClass}__head-cell`]: true,
        [`${blockClass}__head-cell_first`]: true
      }),
      lastHeadCell: cx({
        [`${blockClass}__head-cell`]: true,
        [`${blockClass}__head-cell_last`]: true
      })
    };

    // const handleHeadCellClick = sortBy => dispatch(setSort('id')
    const tableHeader = <thead>
      <tr className={classes.headRow}>
        <th className={classes.firstHeadCell}>ID</th>
        <th className={classes.headCell}>Artist</th>
        <th className={classes.headCell}>Track</th>
        <th className={classes.headCell}>Genre</th>
        <th className={classes.lastHeadCell}>Year</th>
      </tr>
    </thead>;
    
    return (
      <div className={blockClass}>
        <table className={classes.table}>
          {tableHeader}
          <tbody>
            {this.renderRows(musicList, classes)}
          </tbody>
        </table>
      </div>
    );
  }
}

// TODO: to add PropTypes

export default Table;