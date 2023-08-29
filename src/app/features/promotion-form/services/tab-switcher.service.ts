import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabsEnum } from '../enum/tabs.enum';

@Injectable({
  providedIn: 'root'
})
export class TabSwitcherService {
  public activeTab: BehaviorSubject<string>= new BehaviorSubject<string>(TabsEnum.DEFINITION);
  constructor() { }

  changeActiveTab(name: string) {
    this.activeTab.next(name);
  }
}
