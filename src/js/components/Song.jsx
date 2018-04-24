import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist } from '../actions/action-creators';

class Song extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addSong = this.addSong.bind(this);

    this.state = {
      playlistId: '',
      id: this.props.song.id
    }
  }

  handleChange({ target }) {
    this.setState({
      playlistId: target.value
    })
  }

  addSong(e) {
    e.preventDefault();
    if (this.state.playlistId) {
      this.props.addSong(this.state.playlistId, this.state.id);
    }
  }

  render() {
    const { title, image, artist, id } = this.props.song;

    if (this.props.showselector) {
      return (
        <div className="song">
          <img src={image} alt={artist} />
          <div>Title: {title}</div>
          <div>Artist: {artist}</div>
          <form onSubmit={this.addSong}>
            <select onChange={this.handleChange}>
              <option value="">Select Playlist</option>
              {this.props.playlists.map(playlist => {
                return <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
              })}
            </select>
            <button className="btn btn-primary">Add song to playlist</button>
          </form>        
        </div>
      );
    }

    return (
      <div className="song">
        <img src={image} alt={artist} />
        <div>Title: {title}</div>
        <div>Artist: {artist}</div>
      </div>
    );    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSong(playlistId, songId) {
      const action = addSongToPlaylist(playlistId, songId);

      dispatch(action);
    }
  };  
}

function mapStateToProps({ playlists }) {
  return {
    playlists: playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);