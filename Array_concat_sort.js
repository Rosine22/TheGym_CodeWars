const mergeArrays = (arr1, arr2) => {
    // Combine both arrays
    const combined = arr1.concat(arr2);
    // Remove duplicates by converting to a Set, then back to an array
    const unique = Array.from(new Set(combined));
    // Sort the array in ascending order
    return unique.sort((a, b) => a - b);
};
var array1 = [1, 2, 3, 4, 5]; 
var array2 = [6, 7, 8, 9, 10];
var result = mergeArrays(array1,array2);
console.log(result);