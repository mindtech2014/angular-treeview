import { Component, Input } from '@angular/core';

@Component({
  selector: 'treeview',
  templateUrl: './treeview.component.html',
})
export class CardComponent{

  @Input('treeItems') treeItems;
  
  constructor() { }


}