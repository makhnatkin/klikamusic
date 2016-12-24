import request from 'superagent-bluebird-promise';
const musicRequest = 'https://freemusicarchive.org/featured.json';

// action types
export const LOAD_INITAIL_DATA__START = 'LOAD_INITAIL_DATA__START';
export const LOAD_INITAIL_DATA__SUCCESS = 'LOAD_INITAIL__SUCCESS';
export const LOAD_INITAIL_DATA__FAIL = 'LOAD_INITAIL_DATA__FAIL';

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