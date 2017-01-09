// ActionTypes and Actions
import {
  LOAD_INITAIL_DATA__START,
  LOAD_INITAIL_DATA__SUCCESS,
  LOAD_INITAIL_DATA__FAIL,
  SET_PAGE,
  SET_PAGE_COUNT,
  SET_SORT_ID,
  SET_FILTER
} from '../actions';

import { generateMusic, sortBy, filterMusic } from '../utils';

const defaultState = {
  isLoaded: false,
  rowsCount: 10,
  page: 0,
  sortId: undefined,
  sortDirection: undefined,
  counts: [10, 20, 55, 100],
  filter: {
    artist: undefined,
    year: undefined
  }
};

// Reducer
export default (state=defaultState, action) => {
  const {
    type,
    data,
    page,
    count,
    sortId,
    sortDirection,
    filterId,
    filterBy
  } = action;

  // TODO: necessary to optimize the work of different reducers,
  // perhaps we should only set the parameters in reducers,
  // but sorting and filtering to do every time after switch

  switch (type) {
    case LOAD_INITAIL_DATA__SUCCESS: 
      return (() => {
        const { page, rowsCount } = state;

        // a little magic (like mock generator)
        // TODO: to add data.text verify
        const allMusic = generateMusic(data.text);
        const pagesCount = allMusic.length / rowsCount;
        const music = [...allMusic].splice(page * rowsCount, rowsCount); 
        let artists = allMusic.map(item => item.artist);
        // TODO: to add es-shim
        artists = [...new Set(artists)].sort();
        let years = allMusic.map(item => item.year);
        // TODO: to add es-shim
        years = [...new Set(years)].sort();
        let genres = allMusic.map(item => item.genre);
        // TODO: to add es-shim
        genres = [...new Set(genres)].sort();

        return {
          ...state,
          isLoaded: true,
          allMusic,
          filteredMusic: allMusic,
          music,
          artists,
          years,
          genres,
          pagesCount 
        };
      })();

    case SET_PAGE: 
      return (() => {
        const { rowsCount, filteredMusic } = state;
        const music = [...filteredMusic].splice(page * rowsCount, rowsCount); 

        return {
          ...state,
          music,
          page
        };
      })();

    case SET_PAGE_COUNT: 
      return (() => {
        const { filteredMusic } = state;
        const music = [...filteredMusic].splice(0, count); 
        const pagesCount = filteredMusic.length / count;

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
        const { rowsCount, filter } = state;
        let { filteredMusic } = state;

        // sort
        const type = sortId === 'id' ? 'number' : 'string';
        filteredMusic = sortBy(filteredMusic, sortId, type, sortDirection);
        const music = [...filteredMusic].splice(0, rowsCount); 

        return {
          ...state,
          page: 0,
          sortId,
          sortDirection,
          music,
          filteredMusic
        };
      })();

    case SET_FILTER:
      return (() => {
        const { allMusic, rowsCount, sortId, sortDirection } = state;
        const filter = {...state.filter};
        filter[filterId] = filterBy;

        // filter
        let filteredMusic = filterMusic(allMusic, filter);
        
        // sort
        const type = sortId === 'id' ? 'number' : 'string';
        filteredMusic = sortBy(filteredMusic, sortId, type, sortDirection);

        const music = [...filteredMusic].splice(0, rowsCount); 
        const pagesCount = filteredMusic.length / rowsCount;

        return {
          ...state,
          page: 0,
          music,
          filteredMusic,
          filter,
          pagesCount
        };
      })();

    case LOAD_INITAIL_DATA__START:
    case LOAD_INITAIL_DATA__FAIL:
    default:
      return state;
  }
};