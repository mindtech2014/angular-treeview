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
}
