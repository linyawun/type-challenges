// link: https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// use NonNullable to remove null from the type, because the conditional distribution type will not work with null
type InorderTraversal<
  T extends TreeNode | null,
  NT extends TreeNode = NonNullable<T>
> = T extends null
  ? []
  : [
      ...InorderTraversal<NT['left']>,
      NT['val'],
      ...InorderTraversal<NT['right']>
    ];
