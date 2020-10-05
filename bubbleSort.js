const bubbleSort = (array) => {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        unsorted = true;
      }
    }
  }
  return array;
}