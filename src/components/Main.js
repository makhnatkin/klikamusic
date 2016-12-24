import React from "react";
import { connect } from "react-redux";

// Actions
import { loadData } from '../actions';

// TODO: may be transfer to components?..
const Loader = props => <h1>Loading...</h1>;
const MusicBox = ({ musicList }) => <table>
  {musicList.aTracks.map(({ artist_name, track_title, album_id }) => <tr>
    <td>{artist_name}</td>
    <td>{track_title}</td>
    <td>{album_id}</td>
  </tr>)}
</table>;


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
      	<MusicBox musicList={music} />
      </div>
    );
  }
}

// export the connected class
const mapStateToProps = ({ musicBox: {music=[], isLoaded} }) => ({
  music,
  isLoaded
});

export default connect(mapStateToProps)(Main);
