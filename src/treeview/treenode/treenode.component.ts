import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../model/tree-node';

@Component({
  selector: 'treenode',
  templateUrl: './treenode.component.html',
  styleUrls: [ '../treeview.css' ]
})
export class TreeNodeComponent{

  @Input('treeNode') treeNode;
  @Output() onNodeClicked = new EventEmitter<TreeNode<any>>();

  constructor() { }

  public nodeClicked(node: TreeNode<any>)
  {
    this.onNodeClicked.emit(node);
  }

}