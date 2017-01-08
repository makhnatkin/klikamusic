import request from 'superagent-bluebird-promise';
const musicRequest = 'https://freemusicarchive.org/featured.json';
// const musicRequest = 'https://freemusicarchive.org/recent.json';


// action types
export const LOAD_INITAIL_DATA__START = 'LOAD_INITAIL_DATA__START';
export const LOAD_INITAIL_DATA__SUCCESS = 'LOAD_INITAIL_DATA__SUCCESS';
export const LOAD_INITAIL_DATA__FAIL = 'LOAD_INITAIL_DATA__FAIL';
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_COUNT = 'SET_PAGE_COUNT';
export const SET_SORT_ID = 'SET_SORT_ID';

// action creaters
export const loadData = () => {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_INITAIL_DATA__START
    });

    request.get(musicRequest)
      .then(
        res => {
          dispatch({
            type: LOAD_INITAIL_DATA__SUCCESS,
            data: res
          });
        },
        error => console.log(error)
      )
  }
};

export const setPage = page => ({
  type: SET_PAGE,
  page 
});

export const setPageCount = count => ({
  type: SET_PAGE_COUNT,
  count 
});

export const sortBy = (sortId, sortDirection) => ({
  type: SET_SORT_ID,
  sortId,
  sortDirection 
});
