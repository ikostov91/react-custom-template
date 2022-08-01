export const sortObjectsBy = (a, b, propName, direction = 'asc') => {
  if ( a[propName] < b[propName] ){
    return direction === 'asc' ? -1 : 1;
  }

  if ( a[propName] > b[propName] ){
    return direction === 'asc' ? 1 : -1;
  }

  return 0;
};
