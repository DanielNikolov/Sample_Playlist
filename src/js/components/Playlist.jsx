import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';

class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const playlist = this.props.playlists.find(playlist => playlist.id == this.props.match.params.id);
        if (playlist.songs.length < 1) {
            return (
                <h1>Playlist: {playlist.name}</h1>
            )
        }
        const songs = this.props.songs.filter(song => playlist.songs.indexOf(song.id) > -1);
        return (
            <div>
                <h1>Playlist: {playlist.name}</h1>
                <ul>
                    {
                        songs.map(song => {
                            return <li key={song.id}><Song song={song} showselector={false} /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ playlists, songs }) {
    return {
        playlists: playlists,
        songs: songs
    }
}

export default connect(mapStateToProps, null)(Playlist);