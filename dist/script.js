"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tree_1 = __importDefault(require("./Tree"));
const randomArr = (num, max) => {
    const arr = [];
    for (let i = 0; i < num; i += 1) {
        arr.push(Math.floor(Math.random() * max));
    }
    return arr;
};
const arr = randomArr(10, 20);
const example = new Tree_1.default(arr);
console.log("Balanced?", example.isBalanced());
console.log("Pre-order", example.preOrder());
console.log("In-order", example.inOrder());
console.log("Post-order", example.postOrder());
for (let i = 0; i < 10; i += 1) {
    example.insert(Math.floor(Math.random() * 20));
}
;
console.log("Balanced?", example.isBalanced());
example.rebalance();
console.log("Balanced?", example.isBalanced());
console.log("Pre-order", example.preOrder());
console.log("In-order", example.inOrder());
console.log("Post-order", example.postOrder());
//# sourceMappingURL=script.js.map