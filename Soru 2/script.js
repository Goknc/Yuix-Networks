function quickSort(array) {
    if (array.length <= 1) {
        return array
    }


    const pivot = array[array.length - 1] 
    const leftArray = []
    const rightArray = []

    for (const el of array.slice(0, array.length - 1)) {
        if (el < pivot) {
            leftArray.push(el)
        } else {
            rightArray.push(el)
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const arr = [2, 5, 4, 1, 44, 67, 6, 65, 1]

console.log(quickSort(arr))