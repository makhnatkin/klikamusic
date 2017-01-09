export const filterMusic = (music, filter) => {
  let filterFn = 'return true';
  for(let key in filter) {
    if (filter[key] !== undefined && filter[key] !== 'all') {
      filterFn += ` && ''+item['${key}'] === '${filter[key]}'`;
    }
  }  
  return [...music].filter(Function('item', filterFn));
};
