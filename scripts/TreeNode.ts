
class TreeNode {
    data;

    left: TreeNode | null = null;

    right: TreeNode | null = null;

    constructor(data: unknown = null) {
        this.data = data;
    }
}

export default TreeNode
