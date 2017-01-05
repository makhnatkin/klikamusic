import React from 'react';
import './style.scss';
import cx from 'classnames';

// Table component
export class Table extends React.Component {
  static defaultProps = {
    // TODO: to add CSSModules
    className: 'music-table'
  };

  static propTypes = {
    className: React.PropTypes.string.isRequired,
    data: React.PropTypes.array
  };

  renderRows(data=[], classes={}) {
    const { firstCell, row, cell, lastCell } = classes;
    if (data.length < 1) {
      return null;
    }
    return data.map(({ id, artist, track, genre, year }) =>
      <tr className={row} key={id}>
        <td className={firstCell}>{id}</td>
        <td className={cell}>{artist}</td>
        <td className={cell}>{track}</td>
        <td className={cell}>{genre}</td>
        <td className={lastCell}>{year}</td>
      </tr>);
  }

  render() {
    const { className, children, data } = this.props;
    
    // classes (BEM)
    const classes = {
      blockClass: `${className}`,
      table: `${className}__table`,
      headRow: `${className}__head-row`,
      headCell: `${className}__head-cell`,
      row: `${className}__row`,
      cell: `${className}__cell`,
      firstCell: cx({
        [`${className}__cell`]: true,
        [`${className}__cell_first`]: true
      }),
      lastCell: cx({
        [`${className}__cell`]: true,
        [`${className}__cell_last`]: true
      }),
      // TODO: to optimize classnaming
      firstHeadCell: cx({
        [`${className}__head-cell`]: true,
        [`${className}__head-cell_first`]: true
      }),
      lastHeadCell: cx({
        [`${className}__head-cell`]: true,
        [`${className}__head-cell_last`]: true
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
      <div className={classes.blockClass}>
        <table className={classes.table}>
          <col width="5%" />
          <col width="33%" />        
          <col width="37%" />
          <col width="18%" />        
          <col width="7%" />
          {tableHeader}
          <tbody>
            {this.renderRows(data, classes)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;