import TreeNode from "./TreeNode";

class Tree {

    root: TreeNode | null;

    constructor(arr: number[]) {
        const sortedArr = this.#removeDuplicates(arr);
        this.root = this.#buildTree(sortedArr, 0, sortedArr.length - 1) 
    }

    #mergeSort (arr: number[]): number[] {
        const copy = [...arr];
        if (arr.length === 1) {
            return copy;
        }
    
        const mid = Math.floor(copy.length / 2);
        const firstHalf = this.#mergeSort(copy.splice(0, mid));
        const secondHalf = this.#mergeSort(copy);
    
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
    
    #removeDuplicates(arr: number[]) {
        const copy = [...this.#mergeSort(arr)];
        for (let i = 0; i < copy.length; i += 1) {
            if (copy[i] === copy[i - 1]) {
                copy.splice(i, 1);
                i -= 1;
            }
        }
        return copy;
    }
    
    #buildTree(arr: number[], start: number, end: number): TreeNode | null {
        if (start > end) {
            return null
        }
    
        const mid = Math.floor((start + end) / 2);
        const root = new TreeNode(arr[mid]);
        root.left = this.#buildTree(arr, start, mid - 1);
        root.right = this.#buildTree(arr, mid + 1, end);
    
        return root
    }

    #insertNode(value: number, node: TreeNode | null): TreeNode {
        if (node === null) {
            return new TreeNode(value);
        }


        if (value < node.data) {
            node.left = this.#insertNode(value, node.left);
        } else if (value > node.data) {
            node.right = this.#insertNode(value, node.right);
        }

        return node;
    }

    #deleteNode(value: number, node: TreeNode | null): TreeNode | null {
        if (node === null) {
            return node
        }

        if (value < node.data) {
            node.left = this.#deleteNode(value, node.left);
            return node;
        } else if (value > node.data) {
            node.right = this.#deleteNode(value, node.right);
            return node;
        }

        if (node.left === null) {
            return node.right;
        } else if (node.right === null) {
            return node.left;
        } else {
            let succParent = node;
            let succ = node.right;

            while (succ.left !== null) {
                succParent = succ;
                succ = succ.left;
            }

            if (succParent === node) {
                succParent.right = succ.right
            } else {
                succParent.left = succ.right
            }

            node.data = succ.data
        }

        return node
    }

    #findNode(value: number, node: TreeNode | null): TreeNode | null {
        if (node === null) {
            return node;
        }

        if (value < node.data) {
            node = this.#findNode(value, node.left);
        } else if (value > node.data) {
            node = this.#findNode(value, node.right)
        }

        return node
    }

    #inOrderNode(node: TreeNode | null): number[]
    #inOrderNode(node: TreeNode | null, func: (node: TreeNode) => number): void
    #inOrderNode(node: TreeNode | null, func?: (node: TreeNode) => number): void | number[] { 
        const arr: number[] = [];
        if (node === null) {
            return arr;
        }

        
        if (func) {
            this.#inOrderNode(node.left, func); 
            node.data = func(node);
            this.#inOrderNode(node.right, func);
        } else {
            const left = this.#inOrderNode(node.left);
            arr.push(...left);
            arr.push(node.data)
            const right = this.#inOrderNode(node.right);
            arr.push(...right)
        }

        return arr;
    }

    #preOrderNode(node: TreeNode | null): number[]
    #preOrderNode(node: TreeNode | null, func: (node: TreeNode) => number): void
    #preOrderNode(node: TreeNode | null, func?: (node: TreeNode) => number): void | number[] { 
        const arr: number[] = [];
        if (node === null) {
            return arr;
        }

        
        if (func) {
            this.#preOrderNode(node.left, func); 
            node.data = func(node);
            this.#preOrderNode(node.right, func);
        } else {
            arr.push(node.data);
            const left = this.#preOrderNode(node.left);
            arr.push(...left);
            const right = this.#preOrderNode(node.right);
            arr.push(...right);
        }

        return arr;
    }

    #postOrderNode(node: TreeNode | null): number[]
    #postOrderNode(node: TreeNode | null, func: (node: TreeNode) => number): void
    #postOrderNode(node: TreeNode | null, func?: (node: TreeNode) => number): void | number[] { 
        const arr: number[] = [];
        if (node === null) {
            return arr;
        }

        
        if (func) {
            this.#postOrderNode(node.left, func); 
            node.data = func(node);
            this.#postOrderNode(node.right, func);
        } else {
            const left = this.#postOrderNode(node.left);
            arr.push(...left);
            const right = this.#postOrderNode(node.right);
            arr.push(...right);
            arr.push(node.data);
        }

        return arr;
    }

    #depthNode(node: TreeNode | null, root: TreeNode | null): number {
        let num = 0;
        if (root === null) {
            return num;
        }
        if (node) {
            if (node.data === root.data) {
                num += 1;
                return num;
            }

            num += this.#depthNode(node, root.left);
            num += this.#depthNode(node, root.right);

            if (num > 0) {
                num += 1;
            }

        }
        
        return num;
    }

    #isBalancedNode(node: TreeNode | null): boolean {
        let val = true;
        if (node === null) {
            return val;
        }

        const left = this.#isBalancedNode(node.left);
        const right = this.#isBalancedNode(node.right);
        const leftNode = this.height(node.left);
        const rightNode = this.height(node.right);

        if (Math.abs(leftNode - rightNode) > 1) {
            return false
        }

        return left && right
    }

    insert(value: number) {
        this.#insertNode(value, this.root)
    }

    delete(value: number) {
        this.#deleteNode(value, this.root)
    }

    find(value: number) {
        return this.#findNode(value, this.root);
    }

    levelOrder(): number[]
    levelOrder(func: (node: TreeNode) => number): void
    levelOrder(func?: (node: TreeNode) => number): void | number[] {
        const node = this.root;
        const arr: number[] = [];
        if (node) {
            const queue: TreeNode[] = [node];

            while (queue.length > 0) {
                if (queue[0].left) {
                    queue.push(queue[0].left);
                }
                if (queue[0].right) {
                    queue.push(queue[0].right);
                }

                if (func) {
                    queue[0].data = func(queue[0]);
                } else {
                    arr.push(queue[0].data);
                }

            
                queue.shift();
            }
        }

        if (!func) {
            return arr
        }
    }

    inOrder(): number[]
    inOrder(func: (node: TreeNode) => number): void
    inOrder(func?: (node: TreeNode) => number): void | number[] { 
        if (func) {
            this.#inOrderNode(this.root, func);
        } else {
            return this.#inOrderNode(this.root)
        }
    }

    preOrder(): number[]
    preOrder(func: (node: TreeNode) => number): void
    preOrder(func?: (node: TreeNode) => number): void | number[] { 
        if (func) {
            this.#preOrderNode(this.root, func);
        } else {
            return this.#preOrderNode(this.root)
        }
    }

    postOrder(): number[]
    postOrder(func: (node: TreeNode) => number): void
    postOrder(func?: (node: TreeNode) => number): void | number[] { 
        if (func) {
            this.#postOrderNode(this.root, func);
        } else {
            return this.#postOrderNode(this.root)
        }
    }

    height(node: TreeNode | null): number {
        let num = 0;
        if (node === null) {
            return num;
        }

        num += 1;

        const left = this.height(node.left);
        const right = this.height(node.right);

        return Math.max(left, right) + num;

    }

    depth(node: TreeNode | null): number {
        return this.#depthNode(node, this.root);
    }

    isBalanced(): boolean {
        return this.#isBalancedNode(this.root);
    }

    rebalance() {
        const arr = this.inOrder();
        this.root = this.#buildTree(arr, 0, arr.length - 1)
    }
}

