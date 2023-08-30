import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PromotionsService } from 'src/app/shared/services/promotions.service';
import { TabSwitcherService } from '../../services/tab-switcher.service';
import { TabsEnum } from '../../enum/tabs.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  isSendEnabled!: boolean;
  statusSubscription!: Subscription;
  constructor(private promotionsService: PromotionsService, private router: Router, private tabSwitcherService: TabSwitcherService) {}

  ngOnInit(): void {
    this.statusSubscription = this.form.statusChanges.subscribe(status => {
      console.log(status)
      if (status === "VALID") {
        this.isSendEnabled = false;
      } else {
        this.isSendEnabled = true;
      }
    })
  }

  onSave(): void {
    if(this.form.valid) {
      this.promotionsService.addPromotion(this.form.value)
      this.form.reset();
      this.promotionsService.removeDraft();
      this.tabSwitcherService.changeActiveTab(TabsEnum.DEFINITION);
      this.router.navigate(['']);
    }
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }
}
