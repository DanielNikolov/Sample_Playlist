import { actionTypes } from './action-types';

export const createPlayListCreator = playListName => ({
  type: actionTypes.CREATE_PLAYLIST,
  id: new Date().getTime(),
  name: playListName
});
