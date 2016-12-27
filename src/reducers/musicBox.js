// ActionTypes and Actions
import {
  LOAD_INITAIL_DATA__START,
  LOAD_INITAIL_DATA__SUCCESS,
  LOAD_INITAIL_DATA__FAIL,
  SET_PAGE
} from '../actions';

const defaultState = {
  isLoaded: false,
  rowsCount: 15,
  page: 0
}

// ------------------------- begin logic utils 
// TODO: to transfer to utils
const generateMusic = musicArray => {
  const genres = [
    'Alternative Music',
    'Blues',
    'Classical Music',
    'Country Music',
    'Dance Music',
    'Easy Listening',
    'Electronic Music',
    'Folk',
    'Rap',
    'Indie Pop',
    'Inspirational (incl. Gospel)',
    'Asian Pop',
    'Jazz',
    'Latin Music',
    'New Age',
    'Opera',
    'Pop',
    'R&B',
    'Reggae',
    'Rock',
    'Singer',
    'World Music',
  ];

  const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max - min)
    return Math.round(rand);
  }

  const randomArtist = 'Dima Dylan';


  let music = [];
  musicArray = JSON.parse(musicArray);

  // TODO: to add aTracks verify
  music = musicArray.aTracks.map((item, i) => {

    const {
      artist_name,
      track_title,
    } = item;
    
    const artist = (randomInteger(1, 3) === 1) ? randomArtist : artist_name;
    
    return {
      id: i + 1,
      artist,
      track: track_title,
      genre: genres[randomInteger(0, 21)],
      year: randomInteger(1950, 2016)
    }
  });

  return music;
}
// ------------------------- end logic utils 

// Reducer
export default (state=defaultState, action) => {
  const { type, data, page } = action;

  switch (type) {
    case LOAD_INITAIL_DATA__SUCCESS: 
      return (() => {
        const { page, rowsCount } = state;

        // a little magic (like mock generator)
        //  TODO: to add data.text verify
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
          page,
        };
      })();

    case LOAD_INITAIL_DATA__START:
    case LOAD_INITAIL_DATA__FAIL:
    default:
      return state;
  }
}