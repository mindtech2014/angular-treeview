import { Component, VERSION } from '@angular/core';
import { TreeNode } from '../treeview/model/tree-node';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  treeItems: TreeNode<String>[]=[];

  constructor()
  {
    const treeNode:TreeNode<String> = new TreeNode<String>();
    treeNode.label = "item 1";
    treeNode.data = "item 1";
    treeNode.children = [];

    const treeNode1:TreeNode<String> = new TreeNode<String>();
    treeNode1.label = "item child 1";
    treeNode1.data = treeNode1.label;
    const treeNode2:TreeNode<String> = new TreeNode<String>();
    treeNode2.label = "item child 1";
    treeNode2.data = treeNode1.label;

    treeNode.children.push(treeNode1);
    treeNode.children.push(treeNode2);
    this.treeItems.push(treeNode);

    const treeNode3:TreeNode<String> = new TreeNode<String>();
    treeNode3.label = "item 3";
    treeNode3.data = "item 3";
    this.treeItems.push(treeNode3);
  }
}
