import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TreeNode } from './model/tree-node';

@Component({
  selector: 'treeview',
  templateUrl: './treeview.component.html',
  styleUrls: [ './treeview.css' ]
})
export class TreeViewComponent implements OnChanges{

  @Input('treeItems') treeItems :TreeNode<any>[];
  @Output() onNodeSelected = new EventEmitter<TreeNode<any>>();
  
  constructor() { }

  public ngOnChanges(changes: SimpleChanges)
  {
    console.log(changes);
  }

  public nodeArrowClicked(node:TreeNode<any>)
  {
    node.expanded = !node.expanded;
  }

  public nodeSelected(node: TreeNode<any>)
  {
    this.treeItems.forEach(node=>{this.changeSelectedProperty(node, false);})
    node.selected = true;
    this.onNodeSelected.emit(node);
  }

  private changeSelectedProperty(treeNode:TreeNode<any>, selected:boolean)
  {
    treeNode.selected = selected;
    if(treeNode.children)
      treeNode.children.forEach(node=>{this.changeSelectedProperty(node, selected);})
  }

  public treeNodeCheckChanged(treeNode: TreeNode<any>)
  {
    if(treeNode.children)
      treeNode.children.forEach(node=>{ node.checked  = treeNode.checked; });
  }

}