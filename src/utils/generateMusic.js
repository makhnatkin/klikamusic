export const generateMusic = musicArray => {
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
    'Inspirational',
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

    const { artist_name, track_title } = item;
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
