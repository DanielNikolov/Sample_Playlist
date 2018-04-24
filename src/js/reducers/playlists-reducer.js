import { actionTypes } from '../actions/action-types';

export default function playlistsReducer(state = [], action) {
  if (action.type === actionTypes.CREATE_PLAYLIST) {
    return [...state, {id: action.id, name: action.name, songs: [] }];
  }

  if (action.type === actionTypes.ADD_SONG) {
    const targetPlaylist = state.find(p => p.id == action.playlistId);
    const tmpPlaylist = Object.assign({}, targetPlaylist, {
      songs: [...targetPlaylist.songs, action.songId]
    });
    const playlists = state.filter(p => p.id != action.playlistId);

    return [...playlists, tmpPlaylist];
  }

  return state;
}