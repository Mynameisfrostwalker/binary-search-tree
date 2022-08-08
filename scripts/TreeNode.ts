
class TreeNode {
    data;

    left;

    right;

    constructor(
        data: unknown = null,
        left: TreeNode | null = null,
        right: TreeNode | null = null
    ) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export default TreeNode
