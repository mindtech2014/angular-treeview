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
    if(changes.treeItems && changes.treeItems.currentValue)
    {
      changes.treeItems.currentValue.forEach((node, i)=>{ 
        node.parentId  = null;
        node.id = i+1;
        this.setIdsToTreeview(node);
      });
    }
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

  public treeNodeCheckChanged(treeNode: TreeNode<any>)
  {
    if(treeNode.children)
      treeNode.children.forEach(node=>{ node.checked  = treeNode.checked; });
  }

  private changeSelectedProperty(treeNode:TreeNode<any>, selected:boolean)
  {
    treeNode.selected = selected;
    if(treeNode.children)
      treeNode.children.forEach(node=>{this.changeSelectedProperty(node, selected);})
  }

  private setIdsToTreeview(treeNode: TreeNode<any>)
  {
    if(treeNode.children)
    {
      treeNode.children.forEach((node, i)=>{ 
        node.parentId  = treeNode.id;
        node.id =  parseInt(node.parentId.toString() +""+ (i+1));
        this.setIdsToTreeview(node);
      });
    }
  }
}