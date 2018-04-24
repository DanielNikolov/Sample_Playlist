import { actionTypes } from './action-types';

export const createPlayListCreator = playListName => ({
  type: actionTypes.CREATE_PLAYLIST,
  name: playListName
});
