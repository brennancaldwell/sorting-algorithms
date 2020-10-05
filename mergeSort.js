const mergeSort = (array) => {
  if (array.length < 2) { return array; }
  const midPt = Math.floor(array.length / 2);
  const arrOne = array.slice(0, midPt);
  const arrTwo = array.slice(midPt);
  return merge(mergeSort(arrOne), mergeSort(arrTwo));
}

const merge = (subArrOne, subArrTwo) => {
  const sort = [];
  let o = 0, t = 0;
  while (o < subArrOne.length && t < subArrTwo.length) {
    if (subArrOne[o] <= subArrTwo[t]) {
      sort.push(subArrOne[o]);
      o++;
    } else {
      sort.push(subArrTwo[t]);
      t++;
    }
  }
  return sort.concat(subArrOne.slice(o), subArrTwo.slice(t));
}