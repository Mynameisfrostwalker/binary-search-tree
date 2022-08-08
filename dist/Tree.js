"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort = (arr) => {
    const copy = [...arr];
    if (arr.length === 1) {
        return copy;
    }
    const mid = Math.floor(copy.length / 2);
    const firstHalf = mergeSort(copy.splice(0, mid));
    const secondHalf = mergeSort(copy);
    const newArr = [];
    while (firstHalf.length > 0 && secondHalf.length > 0) {
        if (firstHalf[0] < secondHalf[0]) {
            newArr.push(firstHalf[0]);
            firstHalf.shift();
        }
        else {
            newArr.push(secondHalf[0]);
            secondHalf.shift();
        }
    }
    if (firstHalf.length > 0) {
        newArr.push(...firstHalf);
    }
    else if (secondHalf.length > 0) {
        newArr.push(...secondHalf);
    }
    return newArr;
};
//# sourceMappingURL=Tree.js.map