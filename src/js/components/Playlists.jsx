import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            return (
              <li key={playlist.id}>
                <Link to={'/playlist/' + playlist.id}>{playlist.name}</Link>
              </li>
            )
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