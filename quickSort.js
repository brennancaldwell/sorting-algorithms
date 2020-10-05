const quickSort = (arr, lo = 0, hi = arr.length - 1) => {
  if (lo < hi) {
    const pvt = partition(arr, lo, hi);
    quickSort(arr, lo, pvt - 1);
    quickSort(arr, pvt + 1, hi);
    return arr;
  }
}

const partition = (arr, lo, hi) => {
  let p = lo, i;
  for (i = lo; i < hi; i++) {
    if (arr[i] < arr[hi]) {
      [arr[i], arr[p]] = [arr[p], arr[i]];
      p++;
    }
  }
  [arr[i], arr[p]] = [arr[p], arr[i]];
  return p;
}