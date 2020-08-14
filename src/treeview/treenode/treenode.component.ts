import { Component, Input } from '@angular/core';

@Component({
  selector: 'treenode',
  templateUrl: './treenode.component.html',
})
export class TreeNodeComponent{

  @Input('treeNode') treeNode;
  
  constructor() { }


}