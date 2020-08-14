import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './treeview.component';
import { TreeNodeComponent } from './treenode/treenode.component';
import { TreeNode } from './model/tree-node';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeViewComponent,TreeNodeComponent]
  ,exports: [TreeViewComponent, TreeNode]
})
export class TreeViewModule { }