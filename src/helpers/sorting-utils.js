export const sortObjectsBy = (a, b, propName, direction = 'asc') => {
  let sort = 0;

  if ( a[propName] < b[propName] ) {
    sort = -1;
  }

  if ( a[propName] > b[propName] ) {
    sort = 1;
  }

  if (sort) {
    return direction === 'asc' ? sort : sort * -1;
  }

  return sort;
};
