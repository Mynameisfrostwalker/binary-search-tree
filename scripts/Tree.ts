import TreeNode from "./TreeNode";

const mergeSort = (arr: number[]): number[] => {
    const copy = [...arr];
    if (arr.length === 1) {
        return copy;
    }

    const mid = Math.floor(copy.length / 2);
    const firstHalf = mergeSort(copy.splice(0, mid));
    const secondHalf = mergeSort(copy);

    const newArr: number[] = [];
    while (firstHalf.length > 0 && secondHalf.length > 0) {
        if (firstHalf[0] < secondHalf[0]) {
            newArr.push(firstHalf[0]);
            firstHalf.shift();
        } else {
            newArr.push(secondHalf[0]);
            secondHalf.shift();
        }
    }
    if (firstHalf.length > 0) {
        newArr.push(...firstHalf);
    } else if (secondHalf.length > 0) {
        newArr.push(...secondHalf);
    }

    return newArr;
}

const removeDuplicates = (arr: number[]) => {
    const copy = [...mergeSort(arr)];
    for (let i = 0; i < copy.length; i += 1) {
        if (copy[i] === copy[i - 1]) {
            copy.splice(i, 1);
            i -= 1;
        }
    }
    return copy;
}

const buildTree = (arr: number[], start: number, end: number): TreeNode | null => {
    if (start > end) {
        return null
    }

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = buildTree(arr, 0, mid - 1);
    root.right = buildTree(arr, mid + 1, end);

    return root
}

class Tree {

    root: TreeNode | null;

    constructor(arr: number[]) {
        const sortedArr = removeDuplicates(arr);
        this.root = buildTree(sortedArr, 0, sortedArr.length - 1) 
    }

}

console.log(new Tree([2, 2, 9, 1, 3, 3, 3, 4, 6, 5, 7, 7, 8]))
