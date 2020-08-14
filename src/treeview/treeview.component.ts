import { Component, Input } from '@angular/core';
import { TreeNode } from './model/tree-node';

@Component({
  selector: 'treeview',
  templateUrl: './treeview.component.html',
  styleUrls: [ './treeview.css' ]
})
export class TreeViewComponent{

  @Input('treeItems') treeItems;
  
  constructor() { }

  public nodeClicked(node:TreeNode<any>)
  {
    node.expanded = !node.expanded;
  }

}