import { Component, Input } from '@angular/core';

@Component({
  selector: 'treeview',
  templateUrl: './treeview.component.html',
})
export class TreeViewComponent{

  @Input('treeItems') treeItems;
  
  constructor() { }


}