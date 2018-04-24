import React from 'react';
import { Link } from 'react-router-dom';
import Playlists from '../components/Playlists';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="site-sidebar">
        <nav className="side-nav">
          <ul>
            <li><Link to="/songs">Songs</Link></li>
            <li><Link to="/create-playlist">Create Playlist</Link></li>
          </ul>
        </nav>

        <hr />

        <h4>Your Playlists:</h4>
        <Playlists />
      </aside>
    );
  };
}

export default Sidebar;
