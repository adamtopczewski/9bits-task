import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabSwitcherService } from '../../services/tab-switcher.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() id!: string;
  @Input() index!: number;
  @Input() isDisabled!: boolean;
  isActive: boolean = false;
  @Output() tabClickEvent = new EventEmitter<string>();

  constructor(private tabSwitcherService: TabSwitcherService) {}

  onTabClick() {
    this.tabClickEvent.emit(this.id);
  }

  ngOnInit(): void {
    this.tabSwitcherService.activeTab.subscribe(tab => {
      return this.isActive = tab === this.id ? true : false;
    })
  }
}
