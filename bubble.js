function bubbleSort(arr) {
    if (arr.length === 0) return arr;
    // make arr.length - 1 passes because if you have every element sorted except one,
    // the last element is already in it's place (because it's the smallest)
    for (let i = 0; i < arr.length - 1; i++) {
        // don't want to compare the last element to j+1 because that's out of bounds
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;