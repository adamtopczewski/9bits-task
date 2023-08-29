import { Component, OnInit } from '@angular/core';
import { TabSwitcherService } from '../../services/tab-switcher.service';

@Component({
  selector: 'app-mock-step-section',
  templateUrl: './mock-step-section.component.html',
  styleUrls: ['./mock-step-section.component.scss']
})
export class MockStepSectionComponent implements OnInit{
  title: string = '';
  constructor(private tabSwitcherService: TabSwitcherService) {

  }

  ngOnInit(): void {
    this.tabSwitcherService.activeTab.subscribe(tab => {
      this.title = this.tabSwitcherService.getActiveTabTitle(tab);
    })
  }
} 
