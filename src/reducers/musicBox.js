// ActionTypes and Actions
import {
  LOAD_INITAIL_DATA__START,
  LOAD_INITAIL_DATA__SUCCESS,
  LOAD_INITAIL_DATA__FAIL,
  SET_PAGE,
  SET_PAGE_COUNT,
  SET_SORT_ID
} from '../actions';

import { generateMusic, sortBy } from '../utils';

const defaultState = {
  isLoaded: false,
  rowsCount: 10,
  page: 0,
  counts: [10, 20, 55, 100]
};

// Reducer
export default (state=defaultState, action) => {
  const { type, data, page, count, sortId, sortDirection } = action;

  switch (type) {
    case LOAD_INITAIL_DATA__SUCCESS: 
      return (() => {
        const { page, rowsCount } = state;

        // a little magic (like mock generator)
        // TODO: to add data.text verify
        const allMusic = generateMusic(data.text)
        const pagesCount = allMusic.length / rowsCount;
        const music = [...allMusic].splice(page * rowsCount, rowsCount); 

        return {
          ...state,
          isLoaded: true,
          allMusic,
          music,
          pagesCount 
        };
      })();

    case SET_PAGE: 
      return (() => {
        const { rowsCount, allMusic } = state;
        const music = [...allMusic].splice(page * rowsCount, rowsCount); 

        return {
          ...state,
          music,
          page
        };
      })();

    case SET_PAGE_COUNT: 
      return (() => {
        const { allMusic } = state;
        const music = [...allMusic].splice(0, count); 
        const pagesCount = allMusic.length / count;

        return {
          ...state,
          music,
          page: 0,
          pagesCount,
          rowsCount: count
        };
      })();

    case SET_SORT_ID: 
      return (() => {
        let { allMusic, rowsCount } = state;
        const type = sortId === 'id' ? 'number' : 'string';
        allMusic = sortBy(allMusic, sortId, type, sortDirection);
        const music = [...allMusic].splice(0, rowsCount); 

        return {
          ...state,
          page: 0,
          sortId,
          sortDirection,
          music,
          allMusic
        };
      })();

    case LOAD_INITAIL_DATA__START:
    case LOAD_INITAIL_DATA__FAIL:
    default:
      return state;
  }
};