export const sortBy = (music, sortId, type, direction=1) => {
  const sortString = (a, b) => direction * (''+a[sortId]).localeCompare(''+b[sortId]);
  const sortNumber = (a, b) => direction * (+a[sortId] - +b[sortId]);
  const sortFn = (type === 'string') ? sortString : sortNumber;
  return [...music].sort(sortFn);
};
