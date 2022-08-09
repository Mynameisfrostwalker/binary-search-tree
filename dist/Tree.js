"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Tree_instances, _Tree_mergeSort, _Tree_removeDuplicates, _Tree_buildTree, _Tree_insertNode, _Tree_deleteNode, _Tree_findNode, _Tree_inOrderNode, _Tree_preOrderNode, _Tree_postOrderNode, _Tree_depthNode, _Tree_isBalancedNode;
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
class Tree {
    constructor(arr) {
        _Tree_instances.add(this);
        const sortedArr = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_removeDuplicates).call(this, arr);
        this.root = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_buildTree).call(this, sortedArr, 0, sortedArr.length - 1);
    }
    insert(value) {
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_insertNode).call(this, value, this.root);
    }
    delete(value) {
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_deleteNode).call(this, value, this.root);
    }
    find(value) {
        return __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_findNode).call(this, value, this.root);
    }
    levelOrder(func) {
        const node = this.root;
        const arr = [];
        if (node) {
            const queue = [node];
            while (queue.length > 0) {
                if (queue[0].left) {
                    queue.push(queue[0].left);
                }
                if (queue[0].right) {
                    queue.push(queue[0].right);
                }
                if (func) {
                    queue[0].data = func(queue[0]);
                }
                else {
                    arr.push(queue[0].data);
                }
                queue.shift();
            }
        }
        if (!func) {
            return arr;
        }
    }
    inOrder(func) {
        if (func) {
            __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_inOrderNode).call(this, this.root, func);
        }
        else {
            return __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_inOrderNode).call(this, this.root);
        }
    }
    preOrder(func) {
        if (func) {
            __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_preOrderNode).call(this, this.root, func);
        }
        else {
            return __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_preOrderNode).call(this, this.root);
        }
    }
    postOrder(func) {
        if (func) {
            __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_postOrderNode).call(this, this.root, func);
        }
        else {
            return __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_postOrderNode).call(this, this.root);
        }
    }
    height(node) {
        let num = 0;
        if (node === null) {
            return num;
        }
        num += 1;
        const left = this.height(node.left);
        const right = this.height(node.right);
        return Math.max(left, right) + num;
    }
    depth(node) {
        return __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_depthNode).call(this, node, this.root);
    }
    isBalanced() {
        return __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_isBalancedNode).call(this, this.root);
    }
    rebalance() {
        const arr = this.inOrder();
        this.root = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_buildTree).call(this, arr, 0, arr.length - 1);
    }
}
_Tree_instances = new WeakSet(), _Tree_mergeSort = function _Tree_mergeSort(arr) {
    const copy = [...arr];
    if (arr.length === 1) {
        return copy;
    }
    const mid = Math.floor(copy.length / 2);
    const firstHalf = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_mergeSort).call(this, copy.splice(0, mid));
    const secondHalf = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_mergeSort).call(this, copy);
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
}, _Tree_removeDuplicates = function _Tree_removeDuplicates(arr) {
    const copy = [...__classPrivateFieldGet(this, _Tree_instances, "m", _Tree_mergeSort).call(this, arr)];
    for (let i = 0; i < copy.length; i += 1) {
        if (copy[i] === copy[i - 1]) {
            copy.splice(i, 1);
            i -= 1;
        }
    }
    return copy;
}, _Tree_buildTree = function _Tree_buildTree(arr, start, end) {
    if (start > end) {
        return null;
    }
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode_1.default(arr[mid]);
    root.left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_buildTree).call(this, arr, start, mid - 1);
    root.right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_buildTree).call(this, arr, mid + 1, end);
    return root;
}, _Tree_insertNode = function _Tree_insertNode(value, node) {
    if (node === null) {
        return new TreeNode_1.default(value);
    }
    if (value < node.data) {
        node.left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_insertNode).call(this, value, node.left);
    }
    else if (value > node.data) {
        node.right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_insertNode).call(this, value, node.right);
    }
    return node;
}, _Tree_deleteNode = function _Tree_deleteNode(value, node) {
    if (node === null) {
        return node;
    }
    if (value < node.data) {
        node.left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_deleteNode).call(this, value, node.left);
        return node;
    }
    else if (value > node.data) {
        node.right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_deleteNode).call(this, value, node.right);
        return node;
    }
    if (node.left === null) {
        return node.right;
    }
    else if (node.right === null) {
        return node.left;
    }
    else {
        let succParent = node;
        let succ = node.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }
        if (succParent === node) {
            succParent.right = succ.right;
        }
        else {
            succParent.left = succ.right;
        }
        node.data = succ.data;
    }
    return node;
}, _Tree_findNode = function _Tree_findNode(value, node) {
    if (node === null) {
        return node;
    }
    if (value < node.data) {
        node = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_findNode).call(this, value, node.left);
    }
    else if (value > node.data) {
        node = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_findNode).call(this, value, node.right);
    }
    return node;
}, _Tree_inOrderNode = function _Tree_inOrderNode(node, func) {
    const arr = [];
    if (node === null) {
        return arr;
    }
    if (func) {
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_inOrderNode).call(this, node.left, func);
        node.data = func(node);
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_inOrderNode).call(this, node.right, func);
    }
    else {
        const left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_inOrderNode).call(this, node.left);
        arr.push(...left);
        arr.push(node.data);
        const right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_inOrderNode).call(this, node.right);
        arr.push(...right);
    }
    return arr;
}, _Tree_preOrderNode = function _Tree_preOrderNode(node, func) {
    const arr = [];
    if (node === null) {
        return arr;
    }
    if (func) {
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_preOrderNode).call(this, node.left, func);
        node.data = func(node);
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_preOrderNode).call(this, node.right, func);
    }
    else {
        arr.push(node.data);
        const left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_preOrderNode).call(this, node.left);
        arr.push(...left);
        const right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_preOrderNode).call(this, node.right);
        arr.push(...right);
    }
    return arr;
}, _Tree_postOrderNode = function _Tree_postOrderNode(node, func) {
    const arr = [];
    if (node === null) {
        return arr;
    }
    if (func) {
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_postOrderNode).call(this, node.left, func);
        node.data = func(node);
        __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_postOrderNode).call(this, node.right, func);
    }
    else {
        const left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_postOrderNode).call(this, node.left);
        arr.push(...left);
        const right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_postOrderNode).call(this, node.right);
        arr.push(...right);
        arr.push(node.data);
    }
    return arr;
}, _Tree_depthNode = function _Tree_depthNode(node, root) {
    let num = 0;
    if (root === null) {
        return num;
    }
    if (node) {
        if (node.data === root.data) {
            num += 1;
            return num;
        }
        num += __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_depthNode).call(this, node, root.left);
        num += __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_depthNode).call(this, node, root.right);
        if (num > 0) {
            num += 1;
        }
    }
    return num;
}, _Tree_isBalancedNode = function _Tree_isBalancedNode(node) {
    let val = true;
    if (node === null) {
        return val;
    }
    const left = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_isBalancedNode).call(this, node.left);
    const right = __classPrivateFieldGet(this, _Tree_instances, "m", _Tree_isBalancedNode).call(this, node.right);
    const leftNode = this.height(node.left);
    const rightNode = this.height(node.right);
    if (Math.abs(leftNode - rightNode) > 1) {
        return false;
    }
    return left && right;
};
exports.default = Tree;
//# sourceMappingURL=Tree.js.map