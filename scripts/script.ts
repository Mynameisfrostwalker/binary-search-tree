import Tree from "./Tree";

const randomArr = (num: number, max: number): number[] => {
    const arr: number[] = [];
    for (let i = 0; i < num; i += 1) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
}

const arr = randomArr(10, 20);
const example = new Tree(arr);
console.log("Balanced?", example.isBalanced());
console.log("Pre-order", example.preOrder());
console.log("In-order", example.inOrder());
console.log("Post-order", example.postOrder());
for (let i = 0; i < 10; i += 1) {
    example.insert(Math.floor(Math.random() * 20));
};
console.log("Balanced?", example.isBalanced());
example.rebalance();
console.log("Balanced?", example.isBalanced());
console.log("Pre-order", example.preOrder());
console.log("In-order", example.inOrder())
console.log("Post-order", example.postOrder());
