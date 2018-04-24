import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createPlayListCreator } from '../actions/action-creators';

class CreatePlaylistForm extends Component {

  constructor(props) {
    super(props);

    this.createPlayList = this.createPlayList.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: "",
      playListCreated: false
    };
  }

  createPlayList(e) {
    e.preventDefault();
    this.props.createPlayList(this.state.name);
    this.setState({
      playListCreated: true
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  render() {
    if (this.state.playListCreated) {
      return <Redirect to="/" />;
    }

    return (
        <div className="row">
          <form onSubmit={this.createPlayList}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
            <div className="button-actions">
              <button className="btn btn-primary">Create Playlist</button>
            </div>
          </form>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPlayList(playlistName) {
      const action = createPlayListCreator(playlistName);
      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchToProps)(CreatePlaylistForm);