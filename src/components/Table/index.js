import React from 'react';
import './style.scss';
import cx from 'classnames';

import SortButton from '../SortButton/';

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

  renderHeader(classes={}) {
    const { sortId, handleHeadCellClick } = this.props; 

    return(
      <thead>
        <tr className={classes.headRow}>
          <th className={classes.firstHeadCell}>
            <SortButton
              onClick={handleHeadCellClick}
              id="id"
              active={sortId === 'id'}>
              ID
            </SortButton>
          </th>

          <th className={classes.headCell}>
            <SortButton
              onClick={handleHeadCellClick}
              id="artist"
              active={sortId === 'artist'}>
              Artist
            </SortButton>
          </th>

          <th className={classes.headCell}>
            <SortButton
              onClick={handleHeadCellClick}
              id="track"
              active={sortId === 'track'}>
              Track
            </SortButton>
          </th>

          <th className={classes.headCell}>
            <SortButton
              onClick={handleHeadCellClick}
              id="genre"
              active={sortId === 'genre'}>
              Genre
            </SortButton>
          </th>

          <th className={classes.lastHeadCell}>
            <SortButton
              onClick={handleHeadCellClick}
              id="year"
              active={sortId === 'year'}>
              Year
            </SortButton>
          </th>
        </tr>
      </thead>
    );
  }

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
      </tr>
    );
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

    return (
      <div className={classes.blockClass}>
        <table className={classes.table}>
          <colgroup>
            <col width="5%" />
            <col width="33%" />
            <col width="37%" />
            <col width="18%" />
            <col width="7%" />
          </colgroup>
          {this.renderHeader(classes)}
          <tbody>
            {this.renderRows(data, classes)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;