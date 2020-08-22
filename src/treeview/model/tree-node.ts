export class TreeNode<T>
{
  public label :string;
  public data: T;
  public children: TreeNode<T>[];
  public expanded: boolean;
  public selected: boolean;
  public checked: boolean;
}