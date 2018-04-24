import React, { Component } from 'react';
import { connect } from 'react-redux';

class Playlists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: []
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.playlists.map(playlist => {
            return <li key={playlist.id}><span>{playlist.name}</span></li>;
          })
        }
      </ul>
    );
  }
}

function mapStateToProps({ playlists }) {
  return {
    playlists: playlists
  }
}

export default connect(mapStateToProps, null)(Playlists);