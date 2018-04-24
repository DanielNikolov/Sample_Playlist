import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.songs.map(song => {
              return <li key={song.id}><Song song={song} showselector={true} /></li>
          })
        }
      </ul>
    );
  }
}

function mapStateToProps({ songs }) {
  return {
    songs: songs
  }
}

export default connect(mapStateToProps, null) (Songs);