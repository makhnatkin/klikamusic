// ActionTypes and Actions
import {
  LOAD_INITAIL_DATA__START,
  LOAD_INITAIL_DATA__SUCCESS,
  LOAD_INITAIL_DATA__FAIL
} from '../actions';

const defaultState = {
  isLoaded: false
}

// Reducer
export default (state=defaultState, action) => {
  const { type, data } = action;

  switch (type) {
    case LOAD_INITAIL_DATA__SUCCESS:
      //  TODO: to add data.text verify
      return {
        ...state,
        isLoaded: true,
        music: JSON.parse(data.text)
      };

    case LOAD_INITAIL_DATA__START:
    case LOAD_INITAIL_DATA__FAIL:
    default:
      return state;
  }
}