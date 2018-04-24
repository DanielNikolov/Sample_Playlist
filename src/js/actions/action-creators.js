import { actionTypes } from './action-types';

export const createPlayListCreator = playListName => ({
  type: actionTypes.CREATE_PLAYLIST,
  id: new Date().getTime(),
  name: playListName
});

export const addSongToPlaylist = (playlistId, songId) => ({
  type: actionTypes.ADD_SONG,
  playlistId: playlistId,
  songId: songId
});
