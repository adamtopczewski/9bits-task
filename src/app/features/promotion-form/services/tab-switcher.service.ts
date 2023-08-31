import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabsEnum } from '../enum/tabs.enum';
import { Tabs } from '../constants/tabs';

@Injectable({
  providedIn: 'root',
})
export class TabSwitcherService {
  public activeTab: BehaviorSubject<string> = new BehaviorSubject<string>(
    TabsEnum.DEFINITION
  );
  constructor() {}

  changeActiveTab(name: string): void {
    this.activeTab.next(name);
  }

  getActiveTabTitle(tabId: string): string {
    const { text } = Tabs.filter((tab) => tab.id === tabId)[0];
    return text;
  }
}
