import React from "react";
import "../stylesheets/main.scss";

// Table component
export class Table extends React.Component {
  static defaultProps = {
    blockClass: 'music-table'
  };

  // static propTypes = {
  //   blockClass: PropTypes.string,
  // };

  render() {
    const { blockClass, children, musicList } = this.props;
    return (
      <table>
        <tbody>
          {musicList.map(({ id, artist, track, genre, year }) => <tr key={id}>
            <td>{id}</td>
            <td>{artist}</td>
            <td>{track}</td>
            <td>{genre}</td>
            <td>{year}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}

// TODO: to add PropTypes

export default Table;