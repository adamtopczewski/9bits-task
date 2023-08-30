import { Component, OnInit } from '@angular/core';
import { Tab, Tabs } from './constants/tabs';
import { TabSwitcherService } from './services/tab-switcher.service';

@Component({
  selector: 'app-promotion-form',
  templateUrl: './promotion-form.component.html',
  styleUrls: ['./promotion-form.component.scss']
})
export class PromotionFormComponent implements OnInit {
  enableAll: boolean = false;
  tabs: Tab[]= Tabs;
  activeTab: string = '';

  constructor(private tabSwitcherService: TabSwitcherService) {
  }

  ngOnInit() {
    this.tabSwitcherService.activeTab.subscribe(tab => this.activeTab = tab);
  }

  onTabClick(id : string) {
    this.tabSwitcherService.changeActiveTab(id);
  }

  unlockSteps(value: boolean) {
    this.enableAll = value;
  }
}
