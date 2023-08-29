import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent {
  @Input() activeTab!: string;
  
  constructor() {}
}
