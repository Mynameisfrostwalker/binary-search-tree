
class TreeNode {
    data;

    left: TreeNode | null = null;

    right: TreeNode | null = null;

    constructor(data: number) {
        this.data = data;
    }
}

export default TreeNode
