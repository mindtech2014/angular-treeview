import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../model/tree-node';

@Component({
  selector: 'treenode',
  templateUrl: './treenode.component.html',
  styleUrls: [ '../treeview.css' ]
})
export class TreeNodeComponent{

  @Input('treeNode') treeNode;
  @Input('treeNodeCheckChanged') treeNodeCheckChanged;

  @Output() onNodeArrowClicked = new EventEmitter<TreeNode<any>>();
  @Output() onNodeSelected = new EventEmitter<TreeNode<any>>();


  constructor() { }

  public nodeArrowClicked(node: TreeNode<any>)
  {
    this.onNodeArrowClicked.emit(node);
  }

  public nodeSelected(node: TreeNode<any>)
  {
    this.onNodeSelected.emit(node);
  }

  public onCheckbocCheckedChange(node: TreeNode<any>)
  {
    console.log(node.checked);
    if(this.treeNodeCheckChanged)
      this.treeNodeCheckChanged(node);
  }

}