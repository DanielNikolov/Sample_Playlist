import { actionTypes } from '../actions/action-types';

export default function playlistsReducer(state = [], action) {
  if (action.type === actionTypes.CREATE_PLAYLIST) {
    return [...state, {id: action.id, name: action.name, songs: [] }];
  }

  return state;
}